# East Dallas AI - Company Website

A professional, static website for East Dallas AI, offering affordable AI solutions to help small businesses in East Dallas improve their profit margins.

## 🎯 Overview

This is a modern, responsive website built with vanilla HTML, CSS, and JavaScript. The site is designed to be information-focused with secondary lead generation capabilities, hosted on GitHub Pages.

### Key Features:
- **Clean, Professional Design** - Inspired by enterprise sites like Palantir.com
- **Texas Flag Color Scheme** - Blue (#003DA5) and Red (#BF0A30)
- **Fully Responsive** - Mobile-first design for all devices
- **Fast & Lightweight** - Static HTML/CSS/JS with no dependencies
- **Lead Generation** - Simple `mailto:` contact links
- **Accessibility Focused** - WCAG-friendly design

## 📄 Pages

### 1. **Homepage** (`index.html`)
- Hero section with primary CTA
- Solutions overview (3 cards: data, automation, customer intelligence)
- Short process overview
- Call-to-action (`mailto:` link)

### 2. **Approach** (`about.html`)
- How East Dallas AI works with local businesses
- Four-step process: Discovery, Strategy, Development, Optimization
- Contact call-to-action (`mailto:` link)

## 🚀 Getting Started

### Prerequisites
- No build process required!
- Just a modern web browser
- GitHub account (for GitHub Pages hosting)

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/APV110/East-Dallas-AI.git
cd East-Dallas-AI
```

2. **Open in browser:**
   - Simply open any `.html` file in the `docs/` folder with your browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # or with Python 3
     python3 -m http.server 8000
     ```
   - Then visit `http://localhost:8000/docs/`

### File Structure
```
East-Dallas-AI/
├── docs/
│   ├── index.html          # Homepage
│   ├── about.html          # Approach page
│   ├── styles.css          # Main stylesheet
│   └── script.js           # JavaScript (mobile menu, smooth scroll)
├── README.md               # This file
└── .gitignore             # Git ignore rules
```

## 🌐 Deployment - GitHub Pages

### Enable GitHub Pages:

1. **Go to repository settings:**
   - Navigate to: https://github.com/APV110/East-Dallas-AI/settings

2. **Enable Pages:**
   - Go to "Pages" section (left sidebar)
   - Select `main` as source branch
   - Select `/docs` as the folder
   - Click "Save"

3. **Your site will be live at:**
   - `https://APV110.github.io/East-Dallas-AI/`

### What happens after deployment:
- GitHub Pages automatically deploys from the `/docs` folder
- Any commits to the `main` branch will update the live site
- Changes typically appear within 1-2 minutes

## 📝 Configuration & Customization

### 1. **Customize Content:**

Edit the HTML files to update:
- **Company name and branding** - Change "East Dallas AI" throughout
- **Contact information** - Update the `mailto:` address in `index.html` and `about.html`
- **Services** - Edit the solution cards in `index.html`
- **Approach** - Edit the process steps in `about.html`

### 2. **Customize Colors:**

Edit `styles.css` to change colors:
```css
:root {
    --color-primary: #003DA5;      /* Texas Blue */
    --color-accent: #BF0A30;       /* Texas Red */
    /* ... other colors ... */
}
```

### 3. **Add Logo:**

1. Create an `images/` folder in `/docs`
2. Add your logo as `logo.png` or `logo.svg`
3. Update the navbar in HTML files to include:
   ```html
   <img src="images/logo.png" alt="East Dallas AI Logo">
   ```

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Details

### Typography
- **Headings:** System font stack (SF Pro Display, Segoe UI, etc.)
- **Body Text:** Clean sans-serif
- **Font Sizes:** Responsive scaling using CSS variables

### Color Palette
- **Primary (Texas Blue):** #003DA5
- **Accent (Texas Red):** #BF0A30
- **Light Background:** #F5F5F5
- **Dark Text:** #1A1A1A
- **White:** #FFFFFF

### Responsive Breakpoints
- **Desktop:** 1200px max container width
- **Tablet:** 768px breakpoint
- **Mobile:** 480px breakpoint

### Spacing System
- Uses CSS variables for consistent spacing
- Base unit: 1rem (16px)
- Scaling: xs (0.5rem) to 2xl (4rem)

## 🔧 Maintenance

### Regular Tasks:
- ✅ Keep contact information updated
- ✅ Update testimonials/case studies periodically
- ✅ Refresh pricing information
- ✅ Update team/company info

### Performance:
- Current page load: ~1-2 seconds (static HTML/CSS)
- No external dependencies 
- Fully optimized for SEO

## 📞 Contact Information

**Business Hours:** 
- Monday - Friday: 9:00 AM - 6:00 PM CT
- Saturday: 10:00 AM - 4:00 PM CT
- Sunday: Closed

**Get in Touch:**
- Email: hello@eastdallasai.com
- Phone: (469) 123-4567
- Location: East Dallas, Texas

## 📋 Checklist for Launch

- [ ] GitHub Pages enabled in repository settings
- [ ] Custom domain configured (optional)
- [ ] Social media links updated in footer
- [ ] Contact information verified
- [ ] Test all form submissions
- [ ] Test on mobile devices
- [ ] Verify all navigation links work
- [ ] Check spelling/grammar throughout
- [ ] Add Google Analytics (optional)

## 🛠️ Future Enhancements

Potential additions for future iterations:
- Blog/resources section
- Client testimonials/case studies
- Team bios page
- Service-specific landing pages
- Appointment scheduling integration
- Live chat functionality
- Email newsletter signup
- Google Analytics integration
- Schema markup for SEO

## 📄 License

This website is proprietary to East Dallas AI. All content and design are copyrighted.

## 🤝 Support

For questions or technical issues, please reach out to the development team.

---

**Last Updated:** September 2024
**Version:** 1.0 MVP