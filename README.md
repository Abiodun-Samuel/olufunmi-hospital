# Olufunmi Specialist Hospital Ltd. — Website

Complete production-ready website for Olufunmi Specialist Hospital Ltd., Abeokuta, Ogun State, Nigeria.

## Quick Start

Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).

No build tools, no package managers, no server required.

## File Structure

```
olufunmi-hospital/
├── index.html          Homepage
├── about.html          About Us — History, Mission/Vision, Gallery
├── facilities.html     Our Facilities — 6 departments + expansion
├── services.html       Medical Services — 6 services + appointment form
├── procurement.html    Procurement & Partnerships (KEY PAGE — Canton Fair)
├── canton-fair.html    Canton Fair 2026 — Countdown, sourcing, meeting form
├── team.html           Our Team — Leadership, specialist cards
├── contact.html        Contact — Info, map, form, emergency strip
├── assets/
│   ├── css/styles.css  Complete stylesheet (~3280 lines)
│   ├── js/main.js      Complete JavaScript (~580 lines, 20 features)
│   └── images/
│       └── logo.jpeg   Hospital logo
├── CLAUDE.md           Project specification
├── TODO.md             Build progress tracker
└── README.md           This file
```

## Contact Details

| Channel | Details |
|---|---|
| Phone / WhatsApp | +234 903 751 9585 |
| General Email | olufunmihospital@gmail.com |
| Procurement Email | procurement@olufunmihospital.com.ng |
| Instagram | @olufunmihospital |
| Facebook | olufunmi hospital |
| Twitter/X | @olufunmihospitl |
| Address | Asero Estate, Abeokuta, Ogun State, Nigeria |
| Canton Fair | Phase 3 — May 1–5, 2026 |

## Customisation

### Replace Placeholder Images
All images use `https://picsum.photos/seed/{keyword}/{width}/{height}`. Replace with real photography:
- Hospital exterior and interiors
- Staff professional headshots
- Facilities and equipment photos

### Update Google Map
In `contact.html`, replace the `.map-placeholder` div with an actual Google Maps embed when the hospital's Google Maps pin is confirmed.

### Staff Photos
On `team.html`, staff cards use CSS initials fallbacks. When professional photos are available, add `<img>` tags inside `.leadership-img-wrap` and `.team-card-front` elements.

## JavaScript Features

All 20 features in `assets/js/main.js`:

1. Preloader (index.html only)
2. Navigation scroll + hamburger
3. Smooth scroll
4. Back-to-top button
5. Hero particle canvas (medical cross particles)
6. Hero parallax effect
7. Typed.js hero typewriter
8. Countup stats (IntersectionObserver)
9. AOS scroll animations
10. Countdown timer (Canton Fair May 1, 2026)
11. Swiper testimonials carousel
12. Gallery lightbox (keyboard navigation)
13. Button ripple effect
14. Form validation (required, email, Nigerian phone)
15. Conditional supplier fields (checkbox toggle)
16. Section title underline animation
17. Mobile menu stagger animation
18. Card hover tilt (desktop only)
19. Scroll progress bar
20. Lazy image loading

## CDN Dependencies

- Google Fonts: Playfair Display + DM Sans
- Font Awesome 6.5.0
- AOS 2.3.4
- Swiper 10.3.1
- Typed.js 2.0.16

All loaded from CDN — no local dependencies required.

## Deployment

Upload the entire `olufunmi-hospital/` folder to any web host. No server-side processing required — pure static HTML/CSS/JS.

Recommended hosts: Netlify, Vercel, cPanel shared hosting, or any static file server.

## Accessibility

- Skip-to-content link on every page
- All images have descriptive alt text
- ARIA labels on all icon-only buttons
- Focus states visible on all interactive elements
- `prefers-reduced-motion` disables all animations for users who need it
- Form fields have associated labels
- Screen-reader only class (`.sr-only`) for visually hidden text
