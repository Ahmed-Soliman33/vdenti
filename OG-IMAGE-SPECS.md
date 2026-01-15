# VDenti OG Image Design Specifications

## Image Requirements

### Technical Specifications
- **Dimensions:** 1200px × 630px (16:9 aspect ratio)
- **Format:** JPG (optimized for web, 80-90% quality)
- **File Size:** Under 300KB (recommended for fast loading)
- **File Name:** `og-image.jpg`
- **Location:** `/public/og-image.jpg`

### Supported Platforms
- Facebook Open Graph
- Twitter/X Cards
- LinkedIn Shares
- WhatsApp Previews
- All major social media platforms

---

## Design Elements

### 1. Background
- **Primary:** Linear gradient from `#191a33` (top-left) to `#2e2f4d` (bottom-right)
- **Style:** Smooth diagonal gradient (135deg)
- **Decorative Elements:**
  - Semi-transparent circles with radial gradients
  - Top-right: 400px circle, `rgba(200, 179, 152, 0.1)`
  - Bottom-left: 300px circle, `rgba(200, 179, 152, 0.08)`

### 2. Typography
- **Font Family:** Cairo (Arabic), fallback to system fonts
- **Logo (Arabic):**
  - Text: "ڤي دنتي"
  - Size: 64px
  - Weight: 800 (Extra Bold)
  - Color: `#ffffff`
  - Text Shadow: `0 4px 20px rgba(0, 0, 0, 0.3)`
- **Logo (English):**
  - Text: "VDenti"
  - Size: 72px
  - Weight: 800
  - Color: `#ffffff`
  - Letter Spacing: 2px
- **Tagline:**
  - Text: "أفضل عيادة أسنان في الرياض"
  - Size: 36px
  - Weight: 700
  - Color: `#C8B398` (brand accent color)

### 3. Layout Structure

```
┌─────────────────────────────────────────────────┐
│  ⭐ 4.8/5                                       │  ← Rating Badge (top-left)
│                                                 │
│                    ڤي دنتي                     │  ← Arabic Logo (center)
│                    VDenti                       │  ← English Logo
│                                                 │
│           أفضل عيادة أسنان في الرياض           │  ← Tagline
│                                                 │
│      🦷              ✨              💎          │  ← Service Icons
│  ابتسامة هوليوود   زراعة بالليزر   تقويم شفاف │  ← Service Labels
│                                                 │
│           تقنيات ألمانية حديثة 🔬              │  ← Bottom Badge
└─────────────────────────────────────────────────┘
```

### 4. Components

#### Rating Badge (Top-Left)
- **Position:** 40px from top, 40px from left
- **Background:** `rgba(255, 255, 255, 0.15)` with backdrop blur
- **Border:** 1px solid `rgba(255, 255, 255, 0.2)`
- **Border Radius:** 50px (fully rounded)
- **Padding:** 12px 24px
- **Content:** "⭐ 4.8/5"
- **Font Size:** 24px
- **Font Weight:** 700

#### Service Icons Row (Center)
Three service items horizontally aligned:

1. **ابتسامة هوليوود (Hollywood Smile)**
   - Icon: 🦷
   - Circle Background: `rgba(200, 179, 152, 0.2)`
   - Circle Border: 2px solid `#C8B398`
   - Circle Size: 60px × 60px

2. **زراعة بالليزر (Laser Implants)**
   - Icon: ✨
   - Same styling as above

3. **تقويم شفاف (Clear Aligners)**
   - Icon: 💎
   - Same styling as above

**Gap Between Icons:** 40px

#### Bottom Badge (Center-Bottom)
- **Position:** 40px from bottom, centered horizontally
- **Background:** `rgba(200, 179, 152, 0.2)`
- **Border:** 2px solid `#C8B398`
- **Border Radius:** 50px
- **Padding:** 12px 30px
- **Content:** "تقنيات ألمانية حديثة 🔬"
- **Font Size:** 22px
- **Font Weight:** 700
- **Color:** `#C8B398`

---

## How to Create the Image

### Option 1: Using the HTML Template
1. Open `/public/og-image-template.html` in a browser
2. Use a browser screenshot tool or extension:
   - **Chrome:** Use DevTools Device Mode, set to 1200x630
   - **Firefox:** Responsive Design Mode
   - **Extensions:** GoFullPage, Awesome Screenshot
3. Save as `og-image.jpg`

### Option 2: Using Figma
1. Create new frame: 1200px × 630px
2. Apply background gradient: `#191a33` → `#2e2f4d`
3. Add decorative circles with blur effects
4. Add text layers with Cairo font (download from Google Fonts)
5. Add service icons and badges
6. Export as JPG (80-90% quality)

### Option 3: Using Canva
1. Create custom size: 1200px × 630px
2. Use gradient background tool
3. Add text with imported Cairo font
4. Add emoji/icon elements
5. Download as JPG

### Option 4: Using HTML-to-Image Services
1. Copy content from `og-image-template.html`
2. Use services like:
   - htmlcsstoimage.com
   - cloudinary.com (HTML widget)
   - url2png.com
3. Set dimensions to 1200×630
4. Download as JPG

---

## Testing & Validation

### After Creating the Image:

1. **Place the file:** Save as `/public/og-image.jpg`

2. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit: http://localhost:8086/og-image.jpg

3. **Test social media preview:**
   - **Facebook Debugger:** https://developers.facebook.com/tools/debug/
   - **Twitter Card Validator:** https://cards-dev.twitter.com/validator
   - **LinkedIn Inspector:** https://www.linkedin.com/post-inspector/

4. **Verify in HTML:**
   - Ensure all meta tags point to: `https://vdenti.vercel.app/og-image.jpg`
   - Check both Open Graph and Twitter Card tags

5. **After deployment:**
   - Clear cache and re-test with social media validators
   - Share on test accounts to verify preview appearance

---

## Quality Checklist

✅ Dimensions exactly 1200×630 pixels
✅ File format is JPG
✅ File size under 300KB
✅ Text is readable at small sizes
✅ Brand colors match design system
✅ Arabic text displays correctly (RTL)
✅ Emojis/icons are visible
✅ High contrast for social media thumbnails
✅ No text cut off at edges
✅ Looks good on both light and dark backgrounds

---

## Brand Colors Reference

```css
/* Primary Brand Color */
--primary: #191A33;
--primary-dark: #0d0d1a;
--primary-light: #2e2f4d;

/* Accent Color */
--accent: #C8B398;

/* Text Colors */
--text-white: #ffffff;
--text-muted: rgba(255, 255, 255, 0.8);

/* Glass Effects */
--glass-bg: rgba(255, 255, 255, 0.15);
--glass-border: rgba(255, 255, 255, 0.2);
```

---

## Current Usage

The og-image.jpg is referenced in:

1. **index.html** (3 locations):
   - Open Graph: `<meta property="og:image" content="https://vdenti.vercel.app/og-image.jpg" />`
   - Twitter Card: `<meta name="twitter:image" content="https://vdenti.vercel.app/og-image.jpg" />`
   - Secure URL: `<meta property="og:image:secure_url" content="https://vdenti.vercel.app/og-image.jpg" />`

2. **sitemap.xml** (1 location):
   - Image reference: `<image:loc>https://vdenti.vercel.app/og-image.jpg</image:loc>`

---

## Notes

- The HTML template uses web-safe emojis for quick implementation
- For production, consider replacing emojis with custom SVG icons
- Ensure the Cairo font is properly loaded (already configured in the template)
- Test the image preview on multiple devices and platforms
- Consider creating alternate versions for different social platforms if needed

---

## Next Steps

1. Generate the image using one of the methods above
2. Save as `/public/og-image.jpg`
3. Deploy to production
4. Test with social media validators
5. Share a post to verify the preview appears correctly
