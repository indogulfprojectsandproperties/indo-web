import fs from "fs";
import path from "path";
import sharp from "sharp";

const publicDir = path.resolve("./public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Logo SVG (Dark on light / standard)
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 120" width="540" height="120">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&amp;family=Inter:wght@600;700&amp;display=swap');
      .title { font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif; font-size: 42px; font-weight: 800; fill: #0C0C40; letter-spacing: -0.5px; }
      .subtitle { font-family: 'Inter', system-ui, -apple-system, sans-serif; font-size: 13.5px; font-weight: 700; fill: #5A5D7A; letter-spacing: 5px; }
      .sub-amp { fill: #FF2529; font-weight: 800; }
    </style>
  </defs>

  <!-- Brand Motif Mark: Scattered Solid Rectangles (Architectural Geometric) -->
  <g transform="translate(15, 18)">
    <!-- Base Navy Foundation Blocks -->
    <rect x="10" y="24" width="22" height="48" rx="2" fill="#0C0C40" />
    <rect x="36" y="10" width="24" height="62" rx="2" fill="#0C0C40" />
    <rect x="64" y="32" width="22" height="40" rx="2" fill="#0C0C40" />
    
    <!-- Accent Floating Blocks: Amber, Red, Cyan -->
    <!-- Amber (#F8B00F) -->
    <rect x="2" y="38" width="14" height="26" rx="2" fill="#F8B00F" />
    <rect x="52" y="4" width="18" height="18" rx="2" fill="#F8B00F" />
    <rect x="74" y="58" width="18" height="14" rx="2" fill="#F8B00F" />
    
    <!-- Red (#FF2529) -->
    <rect x="22" y="6" width="16" height="14" rx="2" fill="#FF2529" />
    <rect x="42" y="46" width="16" height="20" rx="2" fill="#FF2529" />
    <rect x="88" y="26" width="12" height="22" rx="2" fill="#FF2529" />
    
    <!-- Cyan (#00DDE2) -->
    <rect x="14" y="56" width="14" height="16" rx="2" fill="#00DDE2" />
    <rect x="66" y="14" width="16" height="14" rx="2" fill="#00DDE2" />
    <rect x="34" y="2" width="12" height="8" rx="1.5" fill="#00DDE2" />
  </g>

  <!-- Typography -->
  <text x="135" y="62" class="title">INDO GULF</text>
  <text x="137" y="88" class="subtitle">PROJECTS <tspan class="sub-amp">&amp;</tspan> PROPERTIES</text>
  
  <!-- Subtle divider accent dot -->
  <circle cx="505" cy="54" r="3.5" fill="#00DDE2" />
  <circle cx="517" cy="54" r="3.5" fill="#F8B00F" />
  <circle cx="529" cy="54" r="3.5" fill="#FF2529" />
</svg>`;

// 2. White Logo SVG (for Navy background / footer)
const logoWhiteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 120" width="540" height="120">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&amp;family=Inter:wght@600;700&amp;display=swap');
      .title-white { font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif; font-size: 42px; font-weight: 800; fill: #FFFFFF; letter-spacing: -0.5px; }
      .subtitle-white { font-family: 'Inter', system-ui, -apple-system, sans-serif; font-size: 13.5px; font-weight: 700; fill: #A5A9C5; letter-spacing: 5px; }
      .sub-amp { fill: #FF2529; font-weight: 800; }
    </style>
  </defs>

  <!-- Brand Motif Mark -->
  <g transform="translate(15, 18)">
    <rect x="10" y="24" width="22" height="48" rx="2" fill="#FFFFFF" />
    <rect x="36" y="10" width="24" height="62" rx="2" fill="#FFFFFF" />
    <rect x="64" y="32" width="22" height="40" rx="2" fill="#FFFFFF" />
    
    <rect x="2" y="38" width="14" height="26" rx="2" fill="#F8B00F" />
    <rect x="52" y="4" width="18" height="18" rx="2" fill="#F8B00F" />
    <rect x="74" y="58" width="18" height="14" rx="2" fill="#F8B00F" />
    
    <rect x="22" y="6" width="16" height="14" rx="2" fill="#FF2529" />
    <rect x="42" y="46" width="16" height="20" rx="2" fill="#FF2529" />
    <rect x="88" y="26" width="12" height="22" rx="2" fill="#FF2529" />
    
    <rect x="14" y="56" width="14" height="16" rx="2" fill="#00DDE2" />
    <rect x="66" y="14" width="16" height="14" rx="2" fill="#00DDE2" />
    <rect x="34" y="2" width="12" height="8" rx="1.5" fill="#00DDE2" />
  </g>

  <!-- Typography -->
  <text x="135" y="62" class="title-white">INDO GULF</text>
  <text x="137" y="88" class="subtitle-white">PROJECTS <tspan class="sub-amp">&amp;</tspan> PROPERTIES</text>
  
  <circle cx="505" cy="54" r="3.5" fill="#00DDE2" />
  <circle cx="517" cy="54" r="3.5" fill="#F8B00F" />
  <circle cx="529" cy="54" r="3.5" fill="#FF2529" />
</svg>`;

// 3. Square App Icon SVG
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <rect width="180" height="180" rx="36" fill="#0C0C40" />
  <g transform="translate(38, 38)">
    <rect x="12" y="30" width="26" height="60" rx="3" fill="#FFFFFF" />
    <rect x="44" y="12" width="28" height="78" rx="3" fill="#FFFFFF" />
    <rect x="78" y="40" width="26" height="50" rx="3" fill="#FFFFFF" />
    
    <rect x="2" y="48" width="16" height="32" rx="2.5" fill="#F8B00F" />
    <rect x="62" y="4" width="22" height="22" rx="2.5" fill="#F8B00F" />
    <rect x="90" y="72" width="22" height="18" rx="2.5" fill="#F8B00F" />
    
    <rect x="26" y="8" width="20" height="18" rx="2.5" fill="#FF2529" />
    <rect x="52" y="58" width="20" height="24" rx="2.5" fill="#FF2529" />
    <rect x="108" y="32" width="16" height="28" rx="2.5" fill="#FF2529" />
    
    <rect x="16" y="70" width="18" height="20" rx="2.5" fill="#00DDE2" />
    <rect x="80" y="18" width="20" height="18" rx="2.5" fill="#00DDE2" />
    <rect x="42" y="2" width="16" height="10" rx="2" fill="#00DDE2" />
  </g>
</svg>`;

// 4. OpenGraph Preview Image (1200x630)
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&amp;family=Inter:wght@400;600;700&amp;display=swap');
      .og-title { font-family: 'Space Grotesk', system-ui, sans-serif; font-size: 64px; font-weight: 800; fill: #FFFFFF; letter-spacing: -1px; }
      .og-sub { font-family: 'Inter', system-ui, sans-serif; font-size: 26px; font-weight: 600; fill: #F8B00F; letter-spacing: 2px; }
      .og-desc { font-family: 'Inter', system-ui, sans-serif; font-size: 22px; font-weight: 400; fill: #A5A9C5; }
      .og-badge { font-family: 'Inter', system-ui, sans-serif; font-size: 16px; font-weight: 700; fill: #0C0C40; }
    </style>
  </defs>

  <rect width="1200" height="630" fill="#0C0C40" />
  
  <!-- Subtle decorative grid & blocks -->
  <g opacity="0.12">
    <circle cx="1100" cy="100" r="300" stroke="#00DDE2" stroke-width="2" fill="none" />
    <circle cx="1100" cy="100" r="450" stroke="#F8B00F" stroke-width="1.5" fill="none" />
  </g>

  <!-- Big Decorative Motif Right -->
  <g transform="translate(850, 140) scale(3.5)">
    <rect x="12" y="30" width="20" height="55" rx="3" fill="#FFFFFF" opacity="0.9" />
    <rect x="36" y="12" width="22" height="73" rx="3" fill="#FFFFFF" opacity="0.9" />
    <rect x="62" y="38" width="20" height="47" rx="3" fill="#FFFFFF" opacity="0.9" />
    
    <rect x="2" y="46" width="14" height="28" rx="2" fill="#F8B00F" />
    <rect x="50" y="4" width="16" height="16" rx="2" fill="#F8B00F" />
    <rect x="72" y="66" width="16" height="14" rx="2" fill="#F8B00F" />
    
    <rect x="22" y="8" width="16" height="14" rx="2" fill="#FF2529" />
    <rect x="42" y="52" width="16" height="20" rx="2" fill="#FF2529" />
    <rect x="86" y="30" width="12" height="22" rx="2" fill="#FF2529" />
    
    <rect x="14" y="64" width="14" height="16" rx="2" fill="#00DDE2" />
    <rect x="64" y="16" width="16" height="14" rx="2" fill="#00DDE2" />
    <rect x="34" y="2" width="12" height="8" rx="1.5" fill="#00DDE2" />
  </g>

  <!-- Content Left -->
  <g transform="translate(100, 160)">
    <!-- Pill tag -->
    <rect x="0" y="0" width="240" height="42" rx="21" fill="#00DDE2" />
    <text x="24" y="27" class="og-badge">INDIA (KERALA) &amp; UAE</text>

    <!-- Main Title -->
    <text x="0" y="115" class="og-title">INDO GULF</text>
    <text x="0" y="165" class="og-sub">PROJECTS &amp; PROPERTIES</text>
    
    <text x="0" y="240" class="og-desc">Premier Real Estate &amp; Landmark Property Developments.</text>
    <text x="0" y="275" class="og-desc">Residential, Commercial, Warehouses &amp; Land Investments.</text>
    
    <!-- Domain Tag -->
    <rect x="0" y="330" width="180" height="38" rx="8" fill="#F8B00F" />
    <text x="24" y="355" class="og-badge">ind-ogulf.com</text>
  </g>
</svg>`;

async function run() {
  fs.writeFileSync(path.join(publicDir, "logo.svg"), logoSvg);
  fs.writeFileSync(path.join(publicDir, "logo-white.svg"), logoWhiteSvg);
  fs.writeFileSync(path.join(publicDir, "icon.svg"), iconSvg);

  // Generate PNGs
  await sharp(Buffer.from(logoSvg))
    .resize(1080, 240)
    .png()
    .toFile(path.join(publicDir, "logo.png"));

  await sharp(Buffer.from(logoWhiteSvg))
    .resize(1080, 240)
    .png()
    .toFile(path.join(publicDir, "logo-white.png"));

  await sharp(Buffer.from(iconSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, "icon.png"));

  await sharp(Buffer.from(iconSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, "favicon.png"));

  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png()
    .toFile(path.join(publicDir, "og-image.png"));

  console.log("All brand assets generated successfully in /public !");
}

run().catch((err) => {
  console.error("Asset generation error:", err);
  process.exit(1);
});
