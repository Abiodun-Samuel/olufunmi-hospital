# CLAUDE.md — Olufunmi Specialist Hospital Website

> This file is the single source of truth for all project instructions.
> Read this file in full before writing a single line of code.

---

## 🏥 Project Identity

| Property            | Value                                                                                    |
| ------------------- | ---------------------------------------------------------------------------------------- |
| Hospital Name       | Olufunmi Specialist Hospital Ltd.                                                        |
| Tagline             | World-Class Healthcare                                                                   |
| Sub-tagline         | Partnering for Excellence in Nursing Education & Medical Infrastructure                  |
| Location            | Asero Estate, Abeokuta, Ogun State, Nigeria                                              |
| Positioning         | **Established** specialist hospital expanding into nursing education & clinical training |
| Email (General)     | olufunmihospital@gmail.com                                                               |
| Email (Procurement) | procurement@olufunmihospital.com.ng                                                      |
| Phone / WhatsApp    | +234 903 751 9585                                                                        |
| Instagram           | @olufunmihospital                                                                        |
| Facebook            | olufunmi hospital                                                                        |
| Twitter/X           | @olufunmihospitl                                                                         |
| Canton Fair         | Phase 3 — May 1–5, 2026                                                                  |

---

## ⚠️ Critical Messaging Rules

These rules must never be violated anywhere on the site:

- ✅ Say: "established specialist hospital expanding into nursing education"
- ✅ Say: "expanding our services with a Nursing College"
- ✅ Say: "established hospital expanding training capacity"
- ❌ Never say: "building a hospital" or "new hospital"
- ❌ Never imply the hospital is new or not yet operational

The hospital IS operational. The nursing college IS the expansion. This distinction matters for credibility — especially to international manufacturers viewing the procurement page at Canton Fair 2026.

---

## 🗂️ Project Structure

```
olufunmi-hospital/
├── index.html             ← Homepage
├── about.html             ← About Us
├── facilities.html        ← Our Facilities
├── services.html          ← Services
├── procurement.html       ← Procurement & Partnerships (MOST IMPORTANT PAGE)
├── canton-fair.html       ← Canton Fair 2026
├── team.html              ← Our Team
├── contact.html           ← Contact
├── assets/
│   ├── css/
│   │   └── styles.css     ← All styles (single file, fully specified)
│   ├── js/
│   │   └── main.js        ← All JavaScript (single IIFE file)
│   └── images/
│       └── logo.jpg      ← Copy from project root
├── CLAUDE.md              ← This file
├── TODO.md                ← Build progress tracker
└── README.md              ← Setup instructions (created last)
```

---

## 🛠️ Tech Stack

- **HTML5** — Semantic, accessible, no frameworks
- **CSS3** — Vanilla, design-token-driven (CSS custom properties), mobile-first
- **JavaScript** — Vanilla ES6+, single IIFE in `main.js`, no dependencies except CDN libs
- **No build tools** — No Webpack, Vite, npm, or package managers
- **No CSS frameworks** — No Tailwind, Bootstrap, etc.

---

## 🌐 Permitted CDN Resources

```html
<!-- Fonts -->
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>

<!-- Icons -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

<!-- AOS Scroll Animations -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>

<!-- Swiper (carousels) -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/10.3.1/swiper-bundle.min.css"
/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/10.3.1/swiper-bundle.min.js"></script>

<!-- Typed.js (hero typewriter) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.16/typed.umd.js"></script>
```

---

## 🖼️ Placeholder Images

Use Picsum Photos with consistent seeds so the same URL always returns the same image (no flickering on reload):

```
https://picsum.photos/seed/{keyword}/{width}/{height}
```

**Approved seeds** (medical context): `hospital1`, `hospital2`, `doctor1`, `doctor2`, `nurse1`, `nurse2`, `clinic`, `surgery`, `lab`, `medical`, `ward`, `pharmacy`, `team1`, `team2`, `team3`, `team4`, `training`, `classroom`, `equipment`, `facility`

---

## 🎨 Brand Design Tokens

All CSS custom properties must be declared at the top of `styles.css` exactly as follows:

```css
:root {
  /* Brand Colors */
  --primary: #003087;
  --primary-light: #0052cc;
  --primary-dark: #001a4d;
  --secondary: #006400;
  --accent: #c9a84c;
  --accent-light: #e8c97a;
  --teal: #2a9d8f;
  --teal-light: #4cc9bd;
  --red-cross: #e63946;

  /* Neutrals */
  --white: #ffffff;
  --off-white: #f8f9fc;
  --light-gray: #eef1f8;
  --mid-gray: #d1d5db;
  --text-dark: #1a1f36;
  --text-muted: #6b7280;
  --dark: #0a0e1a;
  --dark-2: #111827;

  /* Gradients */
  --grad-hero: linear-gradient(
    135deg,
    #001a4d 0%,
    #003087 40%,
    #006400 75%,
    #2a9d8f 100%
  );
  --grad-primary: linear-gradient(135deg, #003087, #0052cc);
  --grad-teal: linear-gradient(135deg, #2a9d8f, #006400);
  --grad-gold: linear-gradient(135deg, #c9a84c, #e8c97a);
  --grad-dark: linear-gradient(135deg, #0a0e1a, #1a1f36);

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 48, 135, 0.08);
  --shadow-md: 0 8px 32px rgba(0, 48, 135, 0.12);
  --shadow-lg: 0 24px 64px rgba(0, 48, 135, 0.18);
  --shadow-glow: 0 0 40px rgba(42, 157, 143, 0.25);
  --shadow-gold: 0 0 30px rgba(201, 168, 76, 0.3);

  /* Typography */
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "DM Sans", system-ui, sans-serif;

  /* Spacing Scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;
  --space-4xl: 8rem;

  /* Layout */
  --container: 1280px;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 100px;

  /* Transitions */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 🎯 Design Philosophy & World-Class Standards

This site must feel like it belongs alongside top-tier international hospital websites (Mayo Clinic, Cleveland Clinic, Aga Khan). Apply these principles throughout:

### Visual Hierarchy

- Every page has ONE primary CTA above the fold — never compete with multiple equal-weight actions
- Gold (`--accent`) is reserved for the highest-priority CTAs only (Procurement, Canton Fair)
- Section labels use teal in uppercase small-caps to guide the eye before headings

### Depth & Texture

- Use layered backgrounds: subtle CSS `noise` texture overlays on hero sections (SVG filter or CSS pattern)
- Apply `backdrop-filter: blur()` generously on overlays, navbar-scrolled state, and card hovers
- Add micro-border details: 1px semi-transparent white borders on dark cards (`border: 1px solid rgba(255,255,255,0.08)`)

### Motion Principles

- **Entry animations**: AOS handles scroll-triggered reveals (stagger children with `data-aos-delay`)
- **Hover interactions**: `transform: translateY(-6px)` on cards; scale(1.05) on images
- **Hero drama**: Particle canvas + parallax creates immediate depth without performance cost
- **Countdown flip**: CSS perspective flip animation, not just number swap
- **Button ripple**: Material-style ripple on every `.btn` click
- **NEVER animate color** — only transform, opacity, box-shadow for 60fps performance

### Typography Craft

- Hero H1: `clamp(2.8rem, 6vw, 5.5rem)` — large enough to command, never overflow on mobile
- Use `font-feature-settings: "kern" 1, "liga" 1` on display headings
- Paragraph max-width: `68ch` for optimal reading line length
- Drop caps on `about.html` first paragraph (CSS `::first-letter`)

### Spacing Generosity

- Minimum section padding: `var(--space-3xl)` top and bottom (6rem)
- Card internal padding: `2rem` minimum
- Never let content touch the edge of its container — always `clamp(1rem, 4vw, 2rem)` side padding

### Accessibility (Non-negotiable)

- All images have descriptive `alt` text
- Color contrast ratio ≥ 4.5:1 for all body text
- Focus states visible with `outline: 3px solid var(--teal); outline-offset: 3px`
- Skip-to-content link on every page
- `aria-label` on all icon-only buttons
- Form fields have associated `<label>` elements (never `placeholder` only)
- `prefers-reduced-motion` media query disables all animations

### Performance

- All `<img>` tags use `loading="lazy"` except above-the-fold hero images
- Use `data-src` + IntersectionObserver lazy loading pattern for below-fold images
- Swiper initialized only when `.testimonials-swiper` exists in DOM
- AOS, Typed.js, Swiper — guard all initializations with `document.querySelector()` checks

---

## 📄 Page-by-Page Specification

### index.html (Homepage)

Sections in order:

1. **Hero** — Full-viewport, gradient background, particle canvas, animated caduceus SVG (right side), typed.js subheading, 3 CTA buttons, WhatsApp link, bouncing scroll indicator
2. **Stats Strip** — Dark background: 15+ Years | 10,000+ Patients | 20+ Specialists | 5 Departments (countup animation)
3. **About Intro** — 60/40 split: left = overlapping duo images with accreditation badge overlay; right = label + H2 + 2 paragraphs + 3 feature rows with check icons + CTA
4. **Services Grid** — 6 cards; Nursing Education card has gold border + "Expanding" badge
5. **Expansion Highlight** — Gradient bg, icon list left, inline SVG illustration right
6. **Procurement Highlight** — Off-white bg, 4 icon cards, bottom CTA strip (gold)
7. **Canton Fair Teaser** — Dark bg + gold accents, large H2, countdown timer, CTA
8. **Testimonials** — Swiper, 5 patient testimonials, quote icon, star ratings
9. **Team Preview** — 4 cards, CTA → team.html
10. **Contact CTA Strip** — 3 contact method cards + emergency line

---

### procurement.html (MOST IMPORTANT PAGE)

Audience: Chinese manufacturers at Canton Fair 2026. Must feel trustworthy, professional, internationally fluent.

Sections:

1. **Hero** — Dark dramatic gradient, gold text accents, H1 "Strategic Procurement & Corporate Partnerships", sub "Olufunmi Specialist Hospital — established, expanding, sourcing"
2. **Dual Procurement Panels** — Side-by-side: Nursing School (teal gradient) | Hospital Support (blue gradient). Each has icon list of items being sourced.
3. **Collaboration Opportunities** — 2×2 icon grid: Equipment supply agreements | Training partnerships | Technical collaborations | Long-term procurement contracts
4. **Why Partner With Us** — 5 horizontal rows (icon + title + description): Established Facility | Long-term Buyer | International Standards Focus | Nigeria Strategic Location | Ongoing Procurement Needs
5. **Supplier Proposal Form** — All fields (see field list below). Professional, clean layout.
6. **Canton Fair Strip** — Dark, gold headline, dates, CTA → canton-fair.html

**Supplier Form Fields:**

- Full Name \* (text)
- Company Name \* (text)
- Country of Origin \* (text)
- Email Address \* (email, validated)
- Phone / WhatsApp (tel)
- Product Category \* (select: Simulation Equipment / Hospital Furniture / Training Equipment / Medical Consumables / Diagnostic Equipment / Other)
- Key Certifications (text: CE, ISO, FDA, etc.)
- Minimum Order Quantity (text)
- Message / Product Details \* (textarea, 5 rows)
- Attach Product Catalogue (file, PDF only, optional, max 10MB)
- Submit button with loading state + success card

---

### canton-fair.html

Sections:

1. **Hero** — Dark + gold, H1, dates badge "Phase 3: May 1–5, 2026", countdown timer
2. **What We're Sourcing** — 6-item icon grid (simulation manikins, anatomical models, clinical kits, hospital furniture, training room furniture, medical consumables)
3. **How to Meet Us** — 3-step numbered process with connecting SVG line: Submit Form → Receive Confirmation → Meet at Stand
4. **About Canton Fair** — Paragraph about the fair's significance, a styled pull quote
5. **Meeting Request Form** — Name, Company, Country, Email, WhatsApp, Product Type (select), Preferred Meeting Time (radio: Morning / Afternoon)
6. **Contact Strip** — procurement@olufunmihospital.com.ng, WhatsApp button, "Meetings confirmed in advance only" note

---

### about.html

Sections:

1. **Hero Banner** — Inner page banner, gradient bg, H1, breadcrumb
2. **History Timeline** — 5 milestones alternating left/right on desktop, vertical on mobile:
   - 2008: Hospital Founded in Abeokuta
   - 2012: Expanded to specialist departments
   - 2016: Accreditation & facility upgrade
   - 2020: 10,000 patients milestone
   - 2024: Nursing College expansion announced
3. **Mission / Vision / Values** — 3 cards with gradient icon backgrounds
4. **Credibility Section** — Official statement text + registration badge placeholder + affiliation badge strip
5. **Stats Strip** — Same 4 stats as homepage
6. **Photo Gallery** — 8 images, CSS masonry layout, lightbox on click

---

### facilities.html

Sections:

1. **Hero Banner**
2. **Facilities Grid** — 6 cards with hover overlay reveal:
   - Consultation Rooms
   - Operating Theatre
   - Maternity Ward
   - Diagnostic Laboratory
   - Pharmacy
   - Nursing Simulation Lab ← "Coming Soon" badge
3. **Virtual Tour Teaser** — Full-width, dark section, pan image, play button (non-functional but styled)
4. **Infrastructure Expansion** — Split: image left, text right about nursing college development

---

### services.html

Sections:

1. **Hero Banner**
2. **Services Full Grid** — 6 detailed cards: image + full description + sub-service list + "Book Appointment" CTA each:
   - General Medicine
   - Maternity & Obstetrics
   - Pediatrics
   - Surgery
   - Diagnostics & Lab
   - Nursing Education (gold/teal highlight)
3. **Nursing Education Highlight** — Gold/teal gradient section, icon list, special feature styling
4. **Appointment Booking Form** — Name, Phone, Service (select), Preferred Date, Message

---

### team.html

Sections:

1. **Hero Banner**
2. **Leadership Section** — 2 large featured cards: Medical Director + Administrative Director. Large circular image with CSS initials fallback. Name, title, bio paragraph, social links (LinkedIn, email).
3. **Medical Team Grid** — 8 cards with CSS 3D flip on hover:
   - Front: circular photo + name + role
   - Back: bio + specialty + contact icon
4. **Staff Photo Note** — Styled info banner (teal bg, icon, italic text)
5. **Join Us CTA** — "We are growing — join our medical team" + email CTA

---

### contact.html

Sections:

1. **Hero Banner**
2. **Contact Split** — Left: 4 contact info cards (Address, Phone/WhatsApp, General Email, Procurement Email) + social links. Right: Google Maps embed placeholder (styled iframe placeholder)
3. **Contact Form** — All fields + conditional supplier fields when "I am a supplier" checkbox is ticked (slide-down animation)
4. **Emergency Strip** — Green bg, emergency call CTA, WhatsApp button

---

## 🧭 Navigation (Identical on All Pages)

```html
<nav class="navbar" id="navbar">
  <div class="container">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <img
          src="assets/images/logo.jpg"
          alt="Olufunmi Specialist Hospital Logo"
          width="52"
          height="52"
        />
        <div class="nav-logo-text">
          <span class="nav-logo-name">Olufunmi</span>
          <span class="nav-logo-sub">Specialist Hospital Ltd.</span>
        </div>
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="facilities.html">Facilities</a></li>
        <li><a href="services.html">Services</a></li>
        <li>
          <a href="procurement.html" class="nav-highlight"
            >Procurement & Partnerships</a
          >
        </li>
        <li><a href="canton-fair.html">Canton Fair 2026</a></li>
        <li><a href="team.html">Our Team</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <div class="nav-actions">
        <a href="contact.html#appointment" class="btn btn-primary btn-sm">
          <i class="fas fa-calendar-check"></i> Book Appointment
        </a>
        <button
          class="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>
</nav>
```

**Nav behavior:**

- Transparent on load, `scrolled` class added at 80px scroll (white bg + blur + shadow)
- Active link highlighted based on current page filename
- Mobile: hamburger toggle, full-screen overlay, links stagger-animate in
- `.nav-highlight` class: gold-colored text with subtle animated underline pulse

---

## 🦶 Footer (Identical on All Pages)

3-column grid: Brand + social | Quick links | Contact info
Top gradient border (3px, `--grad-teal`)
Footer bottom bar: dark, copyright + procurement email

---

## 🟢 Floating UI Elements

### WhatsApp FAB

```html
<a
  href="https://wa.me/2349037519585"
  class="whatsapp-fab"
  target="_blank"
  aria-label="Chat on WhatsApp"
>
  <i class="fab fa-whatsapp"></i>
  <span class="fab-tooltip">Chat with us</span>
</a>
```

- Position: fixed, bottom: 6rem, right: 1.5rem
- Green bg, white icon, 52px circle
- Tooltip appears on hover (left of button)
- Gentle pulse animation to draw attention

### Back to Top

- Position: fixed, bottom: 1.5rem, right: 1.5rem
- Hidden until 400px scroll depth, then slides in
- Click: smooth scroll to top

### Scroll Progress Bar

- 3px line at very top of page (above navbar, `z-index: 9999`)
- Grows 0→100% width as user scrolls
- Color: `--grad-teal`

---

## ⚙️ JavaScript Architecture (main.js)

Single IIFE file. Sections delimited with `// ===== SECTION NAME =====` comments.

All 20 features must be implemented — none skipped:

| #   | Feature                           | Guard Condition                          |
| --- | --------------------------------- | ---------------------------------------- |
| 1   | Preloader                         | Always (index.html only has the element) |
| 2   | Navigation scroll + hamburger     | Always                                   |
| 3   | Smooth scroll (anchor links)      | `href` starts with `#`                   |
| 4   | Back-to-top button                | `#backToTop` exists                      |
| 5   | Hero particle canvas              | `#hero-canvas` exists                    |
| 6   | Hero parallax                     | `.hero` exists                           |
| 7   | Typed.js hero                     | `#hero-typed` exists                     |
| 8   | Countup stats                     | `.stat-number[data-target]` exists       |
| 9   | AOS init                          | Always                                   |
| 10  | Countdown timer                   | `#cd-days` exists                        |
| 11  | Swiper testimonials               | `.testimonials-swiper` exists            |
| 12  | Gallery lightbox                  | `.gallery-item` exists                   |
| 13  | Button ripple                     | Always (all `.btn`)                      |
| 14  | Form validation                   | `.validated-form` exists                 |
| 15  | Procurement conditional fields    | `#supplier-toggle` exists                |
| 16  | Section title underline animation | `.section-title` exists                  |
| 17  | Mobile menu stagger               | `#navLinks` exists                       |
| 18  | Card hover tilt (desktop only)    | `pointer: fine` media query              |
| 19  | Scroll progress bar               | `#scrollProgress` exists                 |
| 20  | Lazy image loading                | `img[data-src]` exists                   |

**Countdown target**: `new Date('2026-05-01T00:00:00')`
**Typed strings**: `['World-Class Healthcare', 'Nursing Education & Training', 'International Partnerships', 'Modern Medical Infrastructure']`
**AOS config**: `{ duration: 700, once: true, offset: 80, easing: 'ease-out-cubic' }`

---

## ✅ Build Sequence

Follow this exact order. Do not skip steps or reorder:

```
Step 1:  Create directory structure (mkdir -p all folders)
Step 2:  Copy/verify logo.jpg → assets/images/logo.jpg
Step 3:  Create TODO.md (track progress)
Step 4:  Write assets/css/styles.css (COMPLETE — never truncate)
Step 5:  Write assets/js/main.js (COMPLETE — never truncate)
Step 6:  Write index.html
Step 7:  Write procurement.html
Step 8:  Write canton-fair.html
Step 9:  Write about.html
Step 10: Write facilities.html
Step 11: Write services.html
Step 12: Write team.html
Step 13: Write contact.html
Step 14: Run quality checks (grep for broken links, missing meta, missing script refs)
Step 15: Create README.md
```

After each file output: `✅ [filename] complete — [line count] lines`

---

## 🔍 Quality Gates (Run After All Files Written)

```bash
# Check all internal HTML links resolve
grep -roh 'href="[^#h][^"]*\.html"' olufunmi-hospital/ | sort | uniq

# Confirm logo is referenced correctly in all HTML
grep -r 'logo.jpg' olufunmi-hospital/*.html

# Confirm viewport meta in all pages
grep -rL 'viewport' olufunmi-hospital/*.html

# Confirm styles.css referenced in all pages
grep -rL 'styles.css' olufunmi-hospital/*.html

# Confirm main.js referenced in all pages
grep -rL 'main.js' olufunmi-hospital/*.html

# Count total files created
find olufunmi-hospital/ -type f | wc -l
```

Fix any issues before marking complete.

---

## 🏁 Final Deliverable Format

```
🏥 OLUFUNMI SPECIALIST HOSPITAL WEBSITE — BUILD COMPLETE

Files created:
  olufunmi-hospital/
  ├── index.html          (Homepage — Hero, Stats, About, Services, Expansion, Procurement, Canton Fair, Testimonials, Team, CTA)
  ├── about.html          (About — Timeline, Mission/Vision/Values, Credibility, Gallery)
  ├── facilities.html     (Facilities — Grid, Virtual Tour, Expansion)
  ├── services.html       (Services — Full Grid, Nursing Highlight, Booking Form)
  ├── procurement.html    (Procurement & Partnerships — KEY PAGE)
  ├── canton-fair.html    (Canton Fair 2026 — Countdown, Sourcing, Meeting Form)
  ├── team.html           (Our Team — Leadership, Team Grid, Join CTA)
  ├── contact.html        (Contact — Info, Map, Form, Emergency Strip)
  ├── assets/
  │   ├── css/styles.css  (Complete styles — ~1800+ lines)
  │   ├── js/main.js      (Complete JavaScript — ~600+ lines)
  │   └── images/logo.jpg
  ├── CLAUDE.md
  ├── TODO.md
  └── README.md

To view: Open index.html in any modern browser (Chrome/Firefox/Safari/Edge).
To deploy: Upload entire olufunmi-hospital/ folder to any web host.
To customize: Replace picsum.photos URLs with real images.
Procurement email: procurement@olufunmihospital.com.ng
```
