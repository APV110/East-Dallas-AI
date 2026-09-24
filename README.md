# East Dallas AI - Company Website

A professional, static website for East Dallas AI, offering affordable AI solutions to help small businesses in East Dallas improve their profit margins.

## 🎯 Overview

This is a modern, responsive website built with vanilla HTML, CSS, and JavaScript. The site is designed to be information-focused with secondary lead generation capabilities, hosted on GitHub Pages.

### Key Features:
- **Clean, Professional Design** - Inspired by enterprise sites like Palantir.com
- **Texas Flag Color Scheme** - Blue (#003DA5) and Red (#BF0A30)
- **Fully Responsive** - Mobile-first design for all devices
- **Fast & Lightweight** - Static HTML/CSS/JS with no dependencies
- **Lead Generation** - Formspree-integrated contact form
- **Accessibility Focused** - WCAG-friendly design

## 📄 Pages

### 1. **Homepage** (`index.html`)
- Hero section with primary CTA
- Solutions overview (4 service cards)
- How-it-works process flow (4 steps)
- Impact/results statistics
- Call-to-action section
- Footer with links and social media

### 2. **Services** (`services.html`)
- Detailed service descriptions (4 services)
  - Data Analytics & Insights
  - Process Automation
  - Customer Intelligence
  - Custom AI-Powered Tools
- Implementation process details
- Flexible pricing tiers (Starter, Professional, Enterprise)
- Business impact metrics

### 3. **About Us** (`about.html`)
- Company mission statement
- Core values (6 values with descriptions)
- Why choose East Dallas AI (6 key differentiators)
- Detailed approach/process (5 steps)
- By-the-numbers statistics
- Trust-building content

### 4. **Contact** (`contact.html`)
- Contact information (location, phone, email, hours)
- Comprehensive contact form with Formspree integration
- Form fields:
  - Name, Email, Phone (optional)
  - Company Name
  - Industry (dropdown)
  - Main Business Challenge (textarea)
  - Services interested in (checkboxes)
  - Budget range (dropdown)
  - Additional information (optional)
- Frequently Asked Questions (6 FAQs)
- Social media links

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
│   ├── services.html       # Services page
│   ├── about.html          # About us page
│   ├── contact.html        # Contact form page
│   ├── styles.css          # Main stylesheet
│   └── script.js           # JavaScript (mobile menu, forms)
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

### 1. **Setup Formspree for Contact Form:**

The contact form is currently configured with a placeholder. To make it functional:

1. **Create a Formspree account:**
   - Visit https://formspree.io
   - Sign up for free

2. **Create a new form:**
   - Click "New Form"
   - Give it a name (e.g., "East Dallas AI Contact")
   - Copy your form ID

3. **Update the form action in `contact.html`:**
   - Find line with: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Example: `action="https://formspree.io/f/xyzabc123"`

4. **Test the form:**
   - Fill out and submit
   - Check your email for submissions

### 2. **Customize Content:**

Edit the HTML files to update:
- **Company name and branding** - Change "East Dallas AI" throughout
- **Contact information** - Update phone, email, address in `contact.html`
- **Services** - Modify service descriptions in `services.html`
- **Pricing** - Update pricing tiers in `services.html`
- **Social media links** - Update footer and contact page

### 3. **Customize Colors:**

Edit `styles.css` to change colors:
```css
:root {
    --color-primary: #003DA5;      /* Texas Blue */
    --color-accent: #BF0A30;       /* Texas Red */
    /* ... other colors ... */
}
```

### 4. **Add Logo:**

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
- ✅ Monitor form submissions via Formspree
- ✅ Update testimonials/case studies periodically
- ✅ Refresh pricing information
- ✅ Update team/company info

### Performance:
- Current page load: ~1-2 seconds (static HTML/CSS)
- No external dependencies (except Formspree for forms)
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

- [ ] Formspree form ID configured in `contact.html`
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