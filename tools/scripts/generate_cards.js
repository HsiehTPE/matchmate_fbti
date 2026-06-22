const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..", "..");
const OUT_DIR = path.join(ROOT, "cards");
const TMP_DIR = path.join(OUT_DIR, ".tmp");
const WIDTH = 1080;
const HEIGHT = 1440;
const HIDDEN_ROLE_CODES = new Set(["LEGEND", "ZI-DANE", "DINHO"]);

function readRoles() {
  const appSource = fs.readFileSync(path.join(ROOT, "script.js"), "utf8");
  const match = appSource.match(/const ROLES = (\{[\s\S]*?\n\});\n\nconst ROLE_PROFILES/);
  if (!match) {
    throw new Error("Could not find ROLES definition in script.js.");
  }

  const sandbox = {};
  vm.runInNewContext(`roles = ${match[1]};`, sandbox);
  return sandbox.roles;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function escapeXml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function dataUri(filePath) {
  const absPath = path.resolve(ROOT, filePath);
  const ext = path.extname(absPath).toLowerCase();
  const mime = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png";
  return `data:${mime};base64,${fs.readFileSync(absPath).toString("base64")}`;
}

function wrapByMeasure(text, maxChars, maxLines) {
  const chars = Array.from(String(text || ""));
  const lines = [];
  let current = "";

  chars.forEach((char) => {
    if (current.length >= maxChars && current) {
      lines.push(current);
      current = char;
    } else {
      current += char;
    }
  });

  if (current) {
    lines.push(current);
  }

  if (lines.length > 1 && /^[”"'\u2019）】》」』，。！？；、,.!?;:]+$/.test(lines[lines.length - 1])) {
    lines[lines.length - 2] += lines.pop();
  }

  if (lines.length <= maxLines) {
    return lines;
  }

  const clipped = lines.slice(0, maxLines);
  clipped[maxLines - 1] = `${clipped[maxLines - 1].replace(/[，。！？；、,.!?;]*$/, "")}...`;
  return clipped;
}

function textBlock(lines, x, y, options) {
  const {
    size,
    lineHeight,
    family = "'Noto Sans CJK SC', 'Noto Sans SC', sans-serif",
    weight = 500,
    fill = "#1d2a2f",
    anchor = "start",
    letterSpacing = 0
  } = options;

  const tspans = lines.map((line, index) => (
    `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`
  )).join("");

  return `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" letter-spacing="${letterSpacing}">${tspans}</text>`;
}

function makeHiddenRoleMotif(roleCode, portraitY, portraitH, isSilhouette) {
  if (!roleCode || !HIDDEN_ROLE_CODES.has(roleCode)) {
    return "";
  }

  const opacity = isSilhouette ? 0.46 : 0.58;

  if (roleCode === "LEGEND") {
    return `
  <g opacity="${opacity}">
    <path d="M540 ${portraitY + 132}
      C472 ${portraitY + 174}, 438 ${portraitY + 238}, 452 ${portraitY + 320}
      C390 ${portraitY + 296}, 342 ${portraitY + 238}, 352 ${portraitY + 166}
      C404 ${portraitY + 164}, 438 ${portraitY + 198}, 452 ${portraitY + 254}
      C468 ${portraitY + 178}, 502 ${portraitY + 134}, 540 ${portraitY + 108}
      C578 ${portraitY + 134}, 612 ${portraitY + 178}, 628 ${portraitY + 254}
      C642 ${portraitY + 198}, 676 ${portraitY + 164}, 728 ${portraitY + 166}
      C738 ${portraitY + 238}, 690 ${portraitY + 296}, 628 ${portraitY + 320}
      C642 ${portraitY + 238}, 608 ${portraitY + 174}, 540 ${portraitY + 132} Z"
      fill="#f2d36b" fill-opacity="0.1" stroke="#f2d36b" stroke-width="9" stroke-linejoin="round"/>
    <path d="M494 ${portraitY + 348} C508 ${portraitY + 396}, 572 ${portraitY + 396}, 586 ${portraitY + 348}" fill="none" stroke="#f2d36b" stroke-width="9" stroke-linecap="round"/>
    <path d="M494 ${portraitY + 430} H586 M462 ${portraitY + 478} H618" stroke="#f2d36b" stroke-width="11" stroke-linecap="round"/>
    <path d="M200 ${portraitY + 614} C330 ${portraitY + 558}, 432 ${portraitY + 568}, 540 ${portraitY + 616} C648 ${portraitY + 664}, 750 ${portraitY + 674}, 880 ${portraitY + 616}" fill="none" stroke="#f2d36b" stroke-width="5" stroke-linecap="round" stroke-dasharray="18 16"/>
  </g>`;
  }

  if (roleCode === "ZI-DANE") {
    return `
  <g opacity="${opacity}">
    <path d="M252 ${portraitY + 116} L152 ${portraitY + 650} M252 ${portraitY + 116} L352 ${portraitY + 650}" fill="none" stroke="#f2d36b" stroke-width="8" stroke-linecap="round"/>
    <path d="M196 ${portraitY + 408} H308 M178 ${portraitY + 504} H326 M148 ${portraitY + 650} H356" stroke="#f2d36b" stroke-width="8" stroke-linecap="round"/>
    <path d="M210 ${portraitY + 302} C236 ${portraitY + 284}, 268 ${portraitY + 284}, 294 ${portraitY + 302}" fill="none" stroke="#f2d36b" stroke-width="6" stroke-linecap="round"/>
    <path d="M172 ${portraitY + 648} C206 ${portraitY + 584}, 298 ${portraitY + 584}, 334 ${portraitY + 648}" fill="none" stroke="#f2d36b" stroke-width="6" stroke-linecap="round"/>
    <path d="M214 ${portraitY + 332} L290 ${portraitY + 432} M290 ${portraitY + 332} L214 ${portraitY + 432} M198 ${portraitY + 448} L318 ${portraitY + 520} M318 ${portraitY + 448} L198 ${portraitY + 520}" stroke="#f2d36b" stroke-width="4" stroke-linecap="round"/>
    <path d="M718 ${portraitY + 164} C798 ${portraitY + 104}, 900 ${portraitY + 140}, 914 ${portraitY + 232} C846 ${portraitY + 210}, 778 ${portraitY + 214}, 718 ${portraitY + 258} Z" fill="none" stroke="#f8f4ec" stroke-width="5"/>
    <circle cx="826" cy="${portraitY + 264}" r="9" fill="#f2d36b"/>
  </g>`;
  }

  if (roleCode === "DINHO") {
    return `
  <g opacity="${opacity}">
    <path d="M158 ${portraitY + 190} C296 ${portraitY + 126}, 410 ${portraitY + 126}, 548 ${portraitY + 190} C686 ${portraitY + 254}, 792 ${portraitY + 254}, 922 ${portraitY + 190}" fill="none" stroke="#f2d36b" stroke-width="4" stroke-linecap="round"/>
    <path d="M158 ${portraitY + 228} C296 ${portraitY + 164}, 410 ${portraitY + 164}, 548 ${portraitY + 228} C686 ${portraitY + 292}, 792 ${portraitY + 292}, 922 ${portraitY + 228}" fill="none" stroke="#f2d36b" stroke-width="4" stroke-linecap="round"/>
    <path d="M158 ${portraitY + 266} C296 ${portraitY + 202}, 410 ${portraitY + 202}, 548 ${portraitY + 266} C686 ${portraitY + 330}, 792 ${portraitY + 330}, 922 ${portraitY + 266}" fill="none" stroke="#f2d36b" stroke-width="4" stroke-linecap="round"/>
    <path d="M158 ${portraitY + 304} C296 ${portraitY + 240}, 410 ${portraitY + 240}, 548 ${portraitY + 304} C686 ${portraitY + 368}, 792 ${portraitY + 368}, 922 ${portraitY + 304}" fill="none" stroke="#f2d36b" stroke-width="4" stroke-linecap="round"/>
    <path d="M158 ${portraitY + 342} C296 ${portraitY + 278}, 410 ${portraitY + 278}, 548 ${portraitY + 342} C686 ${portraitY + 406}, 792 ${portraitY + 406}, 922 ${portraitY + 342}" fill="none" stroke="#f2d36b" stroke-width="4" stroke-linecap="round"/>
    <path d="M250 ${portraitY + 206} v156" stroke="#f2d36b" stroke-width="5" stroke-linecap="round"/>
    <circle cx="250" cy="${portraitY + 360}" r="24" fill="#f2d36b"/>
    <path d="M818 ${portraitY + 230} v142" stroke="#d56f2a" stroke-width="5" stroke-linecap="round"/>
    <ellipse cx="792" cy="${portraitY + 372}" rx="28" ry="20" fill="#d56f2a"/>
    <path d="M820 ${portraitY + 230} C858 ${portraitY + 244}, 872 ${portraitY + 274}, 840 ${portraitY + 300}" fill="none" stroke="#d56f2a" stroke-width="5" stroke-linecap="round"/>
  </g>`;
  }

  return "";
}

function makeCardSvg(role, assets, options = {}) {
  const isSilhouette = Boolean(options.silhouette);
  const isHiddenRole = HIDDEN_ROLE_CODES.has(role.code);
  const hasHiddenEffects = isSilhouette || isHiddenRole;
  const displayCode = isSilhouette ? "LOCKED" : (role.displayCode || role.code);
  const titleText = isSilhouette ? "隐藏人格" : role.title;
  const quoteText = isSilhouette ? "等待解锁" : role.quote;
  const shortText = isSilhouette ? "完成测试后揭晓你的隐藏看球搭子" : (role.shortLabel || role.tag);
  const titleLines = wrapByMeasure(titleText, 6, 2);
  const shortLength = Array.from(shortText).length;
  const shortSize = Math.max(21, Math.min(28, Math.floor(680 / Math.max(shortLength, 1))));
  const quoteLines = quoteText ? wrapByMeasure(`"${quoteText}"`, 17, 2) : [];
  const quoteSize = quoteLines.length > 1 ? 28 : 34;
  const quoteLineHeight = quoteLines.length > 1 ? 34 : 38;
  const footerY = 1208;
  const footerH = 146;
  const quoteY = quoteLines.length > 1 ? 1236 : 1243;
  const shortY = quoteLines.length > 1 ? 1316 : 1318;
  const titleSize = titleLines.length > 1 ? 76 : 106;
  const titleLineHeight = titleLines.length > 1 ? 84 : 104;
  const titleY = 284;
  const codeY = titleY + titleLineHeight * titleLines.length + (titleLines.length > 1 ? 28 : 4);
  const portraitY = Math.max(430, codeY + 54);
  const portraitH = 1200 - portraitY;
  const bgStops = hasHiddenEffects
    ? `
      <stop offset="0" stop-color="#263244"/>
      <stop offset="0.54" stop-color="#365047"/>
      <stop offset="1" stop-color="#8a6033"/>`
    : `
      <stop offset="0" stop-color="#f8f2e8"/>
      <stop offset="0.52" stop-color="#fffaf2"/>
      <stop offset="1" stop-color="#e6f0ec"/>`;
  const cardFill = hasHiddenEffects ? "#1f2b36" : "#fffaf2";
  const cardOpacity = hasHiddenEffects ? "0.9" : "0.88";
  const titleFill = hasHiddenEffects ? "#fff8ea" : "#18262b";
  const subtitleFill = hasHiddenEffects ? "#e8d6b0" : "#1d2a2f";
  const brandFill = hasHiddenEffects ? "#f2d36b" : "#0f5b52";
  const codeFill = hasHiddenEffects ? "#f2d36b" : "#d56f2a";
  const stageFill = hasHiddenEffects ? "rgba(24, 34, 45, 0.68)" : "url(#stage)";
  const stageStroke = hasHiddenEffects ? "rgba(242, 211, 107, 0.58)" : "rgba(29, 42, 47, 0.1)";
  const footerFill = hasHiddenEffects ? "#f2d36b" : "#0f5b52";
  const footerOpacity = hasHiddenEffects ? "0.12" : "0.1";
  const quoteFill = hasHiddenEffects ? "#f2d36b" : "#784f34";
  const shortFill = hasHiddenEffects ? "#e8d6b0" : "#4c5d63";
  const hiddenDefs = hasHiddenEffects ? `
    <radialGradient id="hiddenGlow" cx="50%" cy="48%" r="52%">
      <stop offset="0" stop-color="#f2d36b" stop-opacity="${isSilhouette ? "0.55" : "0.34"}"/>
      <stop offset="0.42" stop-color="#d56f2a" stop-opacity="${isSilhouette ? "0.2" : "0.13"}"/>
      <stop offset="1" stop-color="#1f2b36" stop-opacity="0"/>
    </radialGradient>
    <pattern id="scanlines" width="10" height="10" patternUnits="userSpaceOnUse">
      <rect width="10" height="3" fill="#ffffff" opacity="${isSilhouette ? "0.08" : "0.12"}"/>
    </pattern>` : "";
  const silhouetteDefs = isSilhouette ? `
    <filter id="silhouetteShadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#f2d36b" flood-opacity="0.52"/>
      <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#ffffff" flood-opacity="0.2"/>
    </filter>
    <filter id="silhouetteInk">
      <feComponentTransfer in="SourceAlpha" result="solidAlpha">
        <feFuncA type="discrete" tableValues="0 1 1 1"/>
      </feComponentTransfer>
      <feFlood flood-color="#06101c" result="ink"/>
      <feComposite in="ink" in2="solidAlpha" operator="in"/>
    </filter>` : "";
  const roleMotif = "";
  const badgeFill = isSilhouette ? "#f2d36b" : "#111827";
  const badgeTextFill = isSilhouette ? "#f2d36b" : "#fff8ea";
  const badgeOpacity = isSilhouette ? "0.18" : "0.94";
  const hiddenEffects = hasHiddenEffects ? `
  <circle cx="540" cy="${portraitY + portraitH * 0.48}" r="330" fill="url(#hiddenGlow)"/>
  ${roleMotif}
  <g opacity="${isSilhouette ? "0.88" : "0.74"}">
    <circle cx="174" cy="${portraitY + 118}" r="4" fill="#f2d36b"/>
    <circle cx="878" cy="${portraitY + 92}" r="5" fill="#ffffff"/>
    <circle cx="910" cy="${portraitY + 458}" r="4" fill="#f2d36b"/>
    <path d="M210 ${portraitY + 386} l10 22 l22 10 l-22 10 l-10 22 l-10 -22 l-22 -10 l22 -10 z" fill="#f2d36b" opacity="0.72"/>
    <path d="M838 ${portraitY + 292} l8 17 l17 8 l-17 8 l-8 17 l-8 -17 l-17 -8 l17 -8 z" fill="#ffffff" opacity="0.68"/>
  </g>
  <rect x="80" y="${portraitY}" width="920" height="${portraitH}" rx="46" fill="url(#scanlines)" opacity="${isSilhouette ? "0.28" : "0.16"}"/>
  <rect x="740" y="${portraitY + 30}" width="184" height="48" rx="24" fill="${badgeFill}" opacity="${badgeOpacity}" stroke="#f2d36b" stroke-width="3" stroke-opacity="${isSilhouette ? "0.58" : "0.9"}"/>
  ${textBlock(["隐藏人格"], 832, portraitY + 61, {
    size: 25,
    lineHeight: 28,
    family: "'Noto Sans CJK SC', sans-serif",
    weight: 700,
    fill: badgeTextFill,
    anchor: "middle"
  })}` : "";
  const portraitImage = isSilhouette
    ? `
  <image clip-path="url(#portraitClip)" href="${assets.portrait}" x="150" y="${portraitY - 16}" width="780" height="${portraitH + 30}" preserveAspectRatio="xMidYMid meet" filter="url(#silhouetteShadow)" opacity="0.82"/>
  <image clip-path="url(#portraitClip)" href="${assets.portrait}" x="150" y="${portraitY - 16}" width="780" height="${portraitH + 30}" preserveAspectRatio="xMidYMid meet" filter="url(#silhouetteInk)"/>`
    : `<image clip-path="url(#portraitClip)" href="${assets.portrait}" x="150" y="${portraitY - 16}" width="780" height="${portraitH + 30}" preserveAspectRatio="xMidYMid meet"/>`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      ${bgStops}
    </linearGradient>
    <linearGradient id="stage" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.86"/>
      <stop offset="1" stop-color="#f3ebdd" stop-opacity="0.9"/>
    </linearGradient>
    <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="28" stdDeviation="24" flood-color="#2d281f" flood-opacity="0.18"/>
    </filter>
    <clipPath id="portraitClip">
      <rect x="80" y="${portraitY}" width="920" height="${portraitH}" rx="46"/>
    </clipPath>
    ${hiddenDefs}
    ${silhouetteDefs}
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <image href="${assets.bg}" x="-650" y="0" width="2558" height="1440" preserveAspectRatio="xMidYMid slice" opacity="${hasHiddenEffects ? "0.1" : "0.18"}"/>
  <circle cx="930" cy="240" r="250" fill="${hasHiddenEffects ? "#f2d36b" : "#0f5b52"}" opacity="${hasHiddenEffects ? "0.16" : "0.09"}"/>
  <circle cx="120" cy="1220" r="320" fill="#d56f2a" opacity="${hasHiddenEffects ? "0.16" : "0.08"}"/>

  <rect x="46" y="46" width="988" height="1348" rx="54" fill="${cardFill}" opacity="${cardOpacity}" filter="url(#softShadow)"/>
  <rect x="46" y="46" width="988" height="1348" rx="54" fill="none" stroke="${hasHiddenEffects ? "#f2d36b" : "#ffffff"}" stroke-opacity="${hasHiddenEffects ? "0.58" : "0.72"}" stroke-width="${hasHiddenEffects ? "5" : "2"}"/>

  <image href="${assets.logo}" x="720" y="54" width="260" height="240" preserveAspectRatio="xMidYMid meet"/>

  ${textBlock(["MATCHMATE · FBTI"], 104, 116, {
    size: 28,
    lineHeight: 34,
    family: "'Noto Sans CJK SC', sans-serif",
    weight: 700,
    fill: brandFill
  })}
  ${textBlock(["我的看球搭子人格"], 104, 168, {
    size: 42,
    lineHeight: 52,
    family: "'Noto Serif CJK SC', serif",
    weight: 700,
    fill: subtitleFill
  })}

  ${textBlock(titleLines, 104, titleY, {
    size: titleSize,
    lineHeight: titleLineHeight,
    family: "'Noto Serif CJK SC', serif",
    weight: 700,
    fill: titleFill
  })}
  ${textBlock([displayCode], 108, codeY, {
    size: 55,
    lineHeight: 62,
    family: "'Noto Sans CJK SC', sans-serif",
    weight: 700,
    fill: codeFill
  })}

  <rect x="80" y="${portraitY}" width="920" height="${portraitH}" rx="46" fill="${stageFill}" stroke="${stageStroke}" stroke-width="${hasHiddenEffects ? "4" : "2"}"/>
  ${hiddenEffects}
  <ellipse cx="540" cy="1132" rx="330" ry="56" fill="${hasHiddenEffects ? "#f2d36b" : "#1d2a2f"}" opacity="${hasHiddenEffects ? "0.16" : "0.12"}"/>
  ${portraitImage}

  <rect x="92" y="${footerY}" width="896" height="${footerH}" rx="30" fill="${footerFill}" opacity="${footerOpacity}"/>
  ${quoteLines.length ? textBlock(quoteLines, 540, quoteY, {
    size: quoteSize,
    lineHeight: quoteLineHeight,
    family: "'Noto Sans CJK SC', sans-serif",
    weight: 700,
    fill: quoteFill,
    anchor: "middle"
  }) : ""}
  ${textBlock([shortText], 540, shortY, {
    size: shortSize,
    lineHeight: 30,
    family: "'Noto Sans CJK SC', sans-serif",
    weight: 600,
    fill: shortFill,
    anchor: "middle"
  })}
</svg>`;
}

function renderPng(svgPath, pngPath) {
  execFileSync("ffmpeg", [
    "-y",
    "-hide_banner",
    "-loglevel",
    "error",
    "-i",
    svgPath,
    "-frames:v",
    "1",
    pngPath
  ], { stdio: "inherit" });
}

function main() {
  const roles = readRoles();
  ensureDir(OUT_DIR);
  ensureDir(TMP_DIR);

  const sharedAssets = {
    bg: dataUri("./bg_image.png"),
    logo: dataUri("./main_logo_clean.png")
  };

  Object.values(roles).forEach((role) => {
    const svgPath = path.join(TMP_DIR, `${role.code}.svg`);
    const pngPath = path.join(OUT_DIR, `${role.code}-xiaohongshu-card.png`);
    const svg = makeCardSvg(role, {
      ...sharedAssets,
      portrait: dataUri(role.image)
    });
    fs.writeFileSync(svgPath, svg);
    renderPng(svgPath, pngPath);
    console.log(`Generated ${path.relative(ROOT, pngPath)}`);

    if (HIDDEN_ROLE_CODES.has(role.code)) {
      const silhouetteSvgPath = path.join(TMP_DIR, `${role.code}-silhouette.svg`);
      const silhouettePngPath = path.join(OUT_DIR, `${role.code}-silhouette-card.png`);
      const silhouetteSvg = makeCardSvg(role, {
        ...sharedAssets,
        portrait: dataUri(role.image)
      }, { silhouette: true });
      fs.writeFileSync(silhouetteSvgPath, silhouetteSvg);
      renderPng(silhouetteSvgPath, silhouettePngPath);
      console.log(`Generated ${path.relative(ROOT, silhouettePngPath)}`);
    }
  });

  fs.rmSync(TMP_DIR, { recursive: true, force: true });
}

main();
