# 方形金徽章合成:复用 ref/ 归档的空白金底 + 高清源 pill 里的彩色品牌 icon
# 输出: /out/badge-{wechat,xhs,site}.png (RGB,四角白底由 CSS border-radius 剪)
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

W_DIR = "/w"      # fbti repo
OUT = "/out"

# ---------- 1. 空白金底拼方:左帽 + 右帽,中缝 2F 像素线性羽化 ----------
base = Image.open(f"{W_DIR}/ref/src-pill-site-blank.png").convert("RGB")
W, H = base.size
S = H
half = S // 2
F = max(8, S // 14)

sq = Image.new("RGB", (S, S), (255, 255, 255))
left = base.crop((0, 0, half + F, H))
sq.paste(left, (0, 0))

rw = S - (half - F)               # 右帽宽度,贴到 x = half-F
right = base.crop((W - rw, 0, W, H))
ramp = Image.new("L", (rw, H), 255)
d = ImageDraw.Draw(ramp)
for x in range(2 * F):
    d.line((x, 0, x, H), fill=int(255 * x / (2 * F - 1)))
sq.paste(right, (half - F, 0), ramp)
print(f"blank base {W}x{H} -> square {S}x{S}, feather {2*F}px")

sq_np = np.asarray(sq)

# ---------- 2. icon 提取 ----------
def largest_component_from_center(mask):
    """取包含「最靠近画面中心的种子」的连通块(迭代膨胀,无 scipy)。"""
    ys, xs = np.where(mask)
    cy, cx = mask.shape[0] / 2, mask.shape[1] / 2
    i = np.argmin((ys - cy) ** 2 + (xs - cx) ** 2)
    comp = np.zeros_like(mask)
    comp[ys[i], xs[i]] = True
    while True:
        grow = comp.copy()
        grow[1:, :] |= comp[:-1, :]; grow[:-1, :] |= comp[1:, :]
        grow[:, 1:] |= comp[:, :-1]; grow[:, :-1] |= comp[:, 1:]
        grow &= mask
        if (grow == comp).all():
            return comp
        comp = grow

def extract_brand_icon(path, brand_test, blur=1.2, component=False):
    """brand_test(r,g,b)->bool ndarray; 背景=从边界可达的非品牌色区域(BFS=迭代膨胀),
    被品牌色包住的白色(微信眼睛/小红书字)保留为 icon。
    component=True 时只取中心连通块(防杂色误判);微信双气泡不相连,必须 False。"""
    im = Image.open(path).convert("RGB")
    a = np.asarray(im).astype(np.int32)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    brand = brand_test(r, g, b)
    if component:
        brand = largest_component_from_center(brand)
    ys, xs = np.where(brand)
    m = 24  # 余量
    y0, y1 = max(ys.min() - m, 0), min(ys.max() + m, a.shape[0])
    x0, x1 = max(xs.min() - m, 0), min(xs.max() + m, a.shape[1])
    crop = a[y0:y1, x0:x1]
    brand_c = brand[y0:y1, x0:x1]

    bg = np.zeros(brand_c.shape, dtype=bool)
    bg[0, :] = ~brand_c[0, :]; bg[-1, :] = ~brand_c[-1, :]
    bg[:, 0] = ~brand_c[:, 0]; bg[:, -1] = ~brand_c[:, -1]
    while True:
        grow = bg.copy()
        grow[1:, :] |= bg[:-1, :]; grow[:-1, :] |= bg[1:, :]
        grow[:, 1:] |= bg[:, :-1]; grow[:, :-1] |= bg[:, 1:]
        grow &= ~brand_c
        if (grow == bg).all():
            break
        bg = grow
    alpha = np.where(bg, 0, 255).astype(np.uint8)
    icon = Image.fromarray(crop.astype(np.uint8)).convert("RGBA")
    am = Image.fromarray(alpha, "L").filter(ImageFilter.GaussianBlur(blur))
    icon.putalpha(am)
    # 收紧到不透明 bbox
    bbox = am.point(lambda v: 255 if v > 8 else 0).getbbox()
    return icon.crop(bbox)

wechat_icon = extract_brand_icon(
    f"{W_DIR}/ref/src-pill-wechat.png",
    lambda r, g, b: (g > r + 25) & (g > b + 25) & (g > 90),
)
xhs_icon = extract_brand_icon(
    f"{W_DIR}/ref/src-pill-xhs.png",
    lambda r, g, b: (r > 150) & (g < 110) & (b < 110) & (r - np.maximum(g, b) > 60),
    component=True,
)
print("wechat icon", wechat_icon.size, "xhs icon", xhs_icon.size)

# 官网 logo:黑标白底,暗度转 alpha(白→透,黑→实),封闭白区透出金底,与乘法合成等效
# 注意源 PNG 自带 alpha(透明区解码为黑),必须先垫白再算暗度
logo_rgba = Image.open(f"{W_DIR}/main_logo_clean.png").convert("RGBA")
logo_white = Image.new("RGBA", logo_rgba.size, (255, 255, 255, 255))
logo_im = Image.alpha_composite(logo_white, logo_rgba).convert("L")
logo_a = np.asarray(logo_im).astype(np.int32)
alpha = np.clip(255 - logo_a, 0, 255).astype(np.uint8)
site_icon = Image.new("RGBA", logo_im.size, (20, 16, 10, 0))  # 同成品的近黑墨色
site_icon.putalpha(Image.fromarray(alpha, "L"))
bbox = Image.fromarray((alpha > 10).astype(np.uint8) * 255, "L").getbbox()
site_icon = site_icon.crop(bbox)
print("site logo", site_icon.size)

# ---------- 3. 居中合成 ----------
def make_badge(icon, frac_w, name):
    tw = int(S * frac_w)
    th = int(icon.size[1] * tw / icon.size[0])
    if th > S * 0.62:  # 防过高
        th = int(S * 0.62)
        tw = int(icon.size[0] * th / icon.size[1])
    ic = icon.resize((tw, th), Image.LANCZOS)
    badge = sq.copy()
    badge.paste(ic, ((S - tw) // 2, (S - th) // 2), ic)
    badge.save(f"{OUT}/badge-{name}.png", optimize=True)
    print(f"badge-{name}.png {S}x{S}, icon {tw}x{th}")
    return badge

b1 = make_badge(wechat_icon, 0.56, "wechat")
b2 = make_badge(xhs_icon, 0.46, "xhs")
b3 = make_badge(site_icon, 0.58, "site")

# 对比小样:三枚并排
sheet = Image.new("RGB", (S * 3 + 40, S + 20), (244, 239, 229))
for i, b in enumerate([b1, b2, b3]):
    sheet.paste(b, (10 + i * (S + 10), 10))
sheet.save(f"{OUT}/contact-sheet.png")
print("contact sheet saved")
