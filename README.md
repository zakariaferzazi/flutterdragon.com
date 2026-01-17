# FlutterDragon - Mobile App Portfolio Website

A professional, responsive portfolio website for showcasing mobile applications with comprehensive legal compliance pages for Apple App Store and Google Play Store requirements.

## 🌟 Features

- **Modern Design**: Clean, minimal, and professional interface
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Dark Mode**: Toggle between light and dark themes (with localStorage persistence)
- **Fast & Lightweight**: Pure HTML, CSS, and vanilla JavaScript (no frameworks)
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Legal Compliance**: Comprehensive Privacy Policy and Terms of Use pages

## 📁 Project Structure

```
flutterdragon.com/
├── index.html                          # Home page
├── apps.html                           # Apps showcase page
├── about.html                          # About the developer
├── contact.html                        # Contact page
├── flutterdragon_privacy_policy.html   # Privacy Policy (App Store/Play Store compliant)
├── terms.html                          # Terms of Use (App Store/Play Store compliant)
├── css/
│   └── styles.css      # Main stylesheet with responsive design
├── js/
│   └── main.js         # JavaScript for interactivity
├── images/             # Placeholder for app icons and images
└── README.md           # This file
```

## 🎨 Pages Overview

### 1. Home (`index.html`)
- Hero section with call-to-action
- Feature highlights (Quality, Privacy, Performance)
- Professional introduction

### 2. Apps (`apps.html`)
- Grid layout showcasing mobile apps
- Each app card includes:
  - App icon/emoji
  - App name and description
  - Platform badges (iOS/Android)
  - App Store/Play Store links (placeholders)
- 6 example apps included (easily customizable)

### 3. About (`about.html`)
- Developer introduction
- Core values and principles
- Contact information
- Mission statement

### 4. Privacy Policy (`flutterdragon_privacy_policy.html`)
**Compliant with Apple & Google requirements**
- Data collection disclosure
- Third-party services (AdMob, Firebase/Analytics)
- In-app purchases and subscriptions
- Children's privacy (COPPA compliance)
- GDPR and CCPA compliance
- Data deletion process
- Contact information

### 5. Terms of Use (`terms.html`)
**Compliant with Apple & Google requirements**
- App usage conditions
- Subscription billing and auto-renewal
- Refund policy
- Disclaimer of warranties
- Limitation of liability
- Governing law
- Apple and Google platform-specific terms

## 🚀 Getting Started

### Option 1: Direct Use
1. Download/clone this repository
2. Open `index.html` in a web browser
3. Customize content to match your apps

### Option 2: Local Development Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## ✏️ Customization Guide

### Update App Information
Edit `apps.html` to add/modify your apps:

```html
<article class="app-card">
  <div class="app-icon">🎮</div>
  <h3>Your App Name</h3>
  <p>Your app description...</p>
  
  <div class="app-platforms">
    <span class="platform-badge ios">iOS</span>
    <span class="platform-badge android">Android</span>
  </div>
  
  <div class="app-links">
    <a href="YOUR_APP_STORE_URL" class="app-link primary">App Store</a>
    <a href="YOUR_PLAY_STORE_URL" class="app-link secondary">Google Play</a>
  </div>
</article>
```

### Update Contact Email
Replace all instances of `zakariaferzazi24.04.2000@gmail.com` with your email:
- In all HTML files
- In Privacy Policy
- In Terms of Use

### Change Color Scheme
Edit `css/styles.css` and modify CSS variables:

```css
:root {
  --primary-color: #6366f1;      /* Main brand color */
  --primary-dark: #4f46e5;       /* Darker variant */
  --secondary-color: #10b981;    /* Accent color */
  /* ... */
}
```

### Add App Icons/Images
1. Add images to the `images/` folder
2. Replace emoji icons with real app icons:

```html
<!-- Replace this: -->
<div class="app-icon">📝</div>

<!-- With this: -->
<div class="app-icon">
  <img src="images/my-app-icon.png" alt="My App">
</div>
```

### Update Legal Pages
**Important**: Customize the legal pages to match your specific situation:

1. **Privacy Policy** (`privacy.html`):
   - Update contact email addresses
   - Add/remove third-party services you use
   - Specify your governing jurisdiction
   - Update data collection practices

2. **Terms of Use** (`terms.html`):
   - Specify governing law jurisdiction
   - Update refund policy if different
   - Modify liability limitations as needed

## 🔧 Technical Details

### Browser Compatibility
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- No external dependencies
- Minimal CSS (~15KB)
- Minimal JavaScript (~5KB)
- Total page size: < 50KB (excluding images)

### SEO Features
- Semantic HTML5 structure
- Meta descriptions on all pages
- Open Graph tags for social sharing
- Proper heading hierarchy
- Mobile-friendly (Google Mobile-First Indexing)

## 📱 Mobile Responsiveness

Breakpoints:
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

Features:
- Hamburger menu on mobile
- Stacked layouts on small screens
- Touch-friendly buttons and links
- Optimized font sizes

## 🌙 Dark Mode

The website includes a dark mode toggle:
- Click the moon/sun icon in the navigation
- Preference is saved to `localStorage`
- Smooth transitions between themes

## 📄 Legal Compliance Checklist

### ✅ Apple App Store Requirements
- [x] Privacy Policy with data collection disclosure
- [x] Contact information for privacy inquiries
- [x] Third-party data sharing disclosure (AdMob, Analytics)
- [x] Children's privacy (COPPA) compliance statement
- [x] Data deletion process
- [x] In-app purchase and subscription terms

### ✅ Google Play Store Requirements
- [x] Privacy Policy with data usage explanation
- [x] Contact information
- [x] Third-party service disclosure
- [x] Ad network disclosure (AdMob)
- [x] Data retention and deletion policy
- [x] Terms of Use

### ✅ GDPR Compliance (European Users)
- [x] Legal basis for data processing
- [x] User rights (access, deletion, portability)
- [x] Data retention periods
- [x] Contact for data protection inquiries

### ✅ CCPA Compliance (California Users)
- [x] Data collection disclosure
- [x] Right to deletion
- [x] No sale of personal data statement

## 🎯 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Push this code to the repository
3. Enable GitHub Pages in Settings → Pages
4. Access at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)
1. Sign up at [Netlify](https://netlify.com)
2. Drag and drop the folder
3. Get instant deployment with custom domain support

### Option 3: Vercel (Free)
1. Sign up at [Vercel](https://vercel.com)
2. Import repository or drag & drop
3. Deploy with automatic HTTPS

### Option 4: Traditional Web Hosting
Upload files via FTP to any web hosting service:
- Upload all files to `public_html` or `www` folder
- Ensure `index.html` is in the root directory
- Set proper file permissions (644 for files, 755 for folders)

## 📝 Customization Checklist

Before going live, update:
- [ ] App information in `apps.html`
- [ ] Contact email in all pages
- [ ] Privacy Policy email addresses
- [ ] Terms of Use jurisdiction/governing law
- [ ] About page developer information
- [ ] Website title and meta descriptions
- [ ] Favicon (add `favicon.png` to `images/`)
- [ ] App icons/screenshots
- [ ] Color scheme (optional)
- [ ] Analytics tracking code (optional)

## 🔒 Privacy & Security

This website:
- ✅ No cookies (except dark mode preference in `localStorage`)
- ✅ No tracking scripts by default
- ✅ No external dependencies
- ✅ HTTPS recommended for deployment
- ✅ No sensitive data collected

## 🛠️ Optional Enhancements

Consider adding:
- Google Analytics for traffic monitoring
- Contact form with email service (Formspree, EmailJS)
- Blog section for app updates
- Newsletter signup
- App screenshots/videos
- User reviews/testimonials
- FAQ section

## 📧 Support & Contact

For questions about this website template:
- Email: zakariaferzazi24.04.2000@gmail.com
- Website: https://flutterdragon.com

## 📜 License

This website template is provided as-is for use by independent app developers.
You are free to use, modify, and distribute it for your app portfolio.

**Note**: Legal pages (Privacy Policy & Terms of Use) are templates and should be 
reviewed by a legal professional to ensure they meet your specific requirements.

## 🙏 Credits

Built with ❤️ by an independent developer for independent developers.

---

**Last Updated**: January 17, 2026
**Version**: 1.0.0
