const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const ROOT = __dirname;
const OUT_DIR = path.join(ROOT, "cards");
const TMP_DIR = path.join(OUT_DIR, ".tmp");
const WIDTH = 1080;
const HEIGHT = 1440;

function readRoles() {
  const appSource = fs.readFileSync(path.join(ROOT, "app.js"), "utf8");
  const match = appSource.match(/const ROLES = (\{[\s\S]*?\n\});\n\nconst ROLE_PROFILES/);
  if (!match) {
    throw new Error("Could not find ROLES definition in app.js.");
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

function makeCardSvg(role, assets) {
  const displayCode = role.displayCode || role.code;
  const titleLines = wrapByMeasure(role.title, 6, 2);
  const shortText = role.shortLabel || role.tag;
  const shortLength = Array.from(shortText).length;
  const shortSize = Math.max(21, Math.min(28, Math.floor(680 / Math.max(shortLength, 1))));
  const quoteLines = role.quote ? wrapByMeasure(`"${role.quote}"`, 17, 2) : [];
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

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f8f2e8"/>
      <stop offset="0.52" stop-color="#fffaf2"/>
      <stop offset="1" stop-color="#e6f0ec"/>
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
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <image href="${assets.bg}" x="-650" y="0" width="2558" height="1440" preserveAspectRatio="xMidYMid slice" opacity="0.18"/>
  <circle cx="930" cy="240" r="250" fill="#0f5b52" opacity="0.09"/>
  <circle cx="120" cy="1220" r="320" fill="#d56f2a" opacity="0.08"/>

  <rect x="46" y="46" width="988" height="1348" rx="54" fill="#fffaf2" opacity="0.88" filter="url(#softShadow)"/>
  <rect x="46" y="46" width="988" height="1348" rx="54" fill="none" stroke="#ffffff" stroke-opacity="0.72" stroke-width="2"/>

  <image href="${assets.logo}" x="720" y="54" width="260" height="240" preserveAspectRatio="xMidYMid meet"/>

  ${textBlock(["MATCHMATE · FBTI"], 104, 116, {
    size: 28,
    lineHeight: 34,
    family: "'Noto Sans CJK SC', sans-serif",
    weight: 700,
    fill: "#0f5b52"
  })}
  ${textBlock(["我的看球搭子人格"], 104, 168, {
    size: 42,
    lineHeight: 52,
    family: "'Noto Serif CJK SC', serif",
    weight: 700,
    fill: "#1d2a2f"
  })}

  ${textBlock(titleLines, 104, titleY, {
    size: titleSize,
    lineHeight: titleLineHeight,
    family: "'Noto Serif CJK SC', serif",
    weight: 700,
    fill: "#18262b"
  })}
  ${textBlock([displayCode], 108, codeY, {
    size: 55,
    lineHeight: 62,
    family: "'Noto Sans CJK SC', sans-serif",
    weight: 700,
    fill: "#d56f2a"
  })}

  <rect x="80" y="${portraitY}" width="920" height="${portraitH}" rx="46" fill="url(#stage)" stroke="#1d2a2f" stroke-opacity="0.1" stroke-width="2"/>
  <ellipse cx="540" cy="1132" rx="330" ry="56" fill="#1d2a2f" opacity="0.12"/>
  <image clip-path="url(#portraitClip)" href="${assets.portrait}" x="150" y="${portraitY - 16}" width="780" height="${portraitH + 30}" preserveAspectRatio="xMidYMid meet"/>

  <rect x="92" y="${footerY}" width="896" height="${footerH}" rx="30" fill="#0f5b52" opacity="0.1"/>
  ${quoteLines.length ? textBlock(quoteLines, 540, quoteY, {
    size: quoteSize,
    lineHeight: quoteLineHeight,
    family: "'Noto Sans CJK SC', sans-serif",
    weight: 700,
    fill: "#784f34",
    anchor: "middle"
  }) : ""}
  ${textBlock([shortText], 540, shortY, {
    size: shortSize,
    lineHeight: 30,
    family: "'Noto Sans CJK SC', sans-serif",
    weight: 600,
    fill: "#4c5d63",
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
    logo: dataUri("./main_logo.png")
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
  });

  fs.rmSync(TMP_DIR, { recursive: true, force: true });
}

main();
