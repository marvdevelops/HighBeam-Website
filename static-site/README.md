# HighBeam Static Website

A static HTML/CSS/JS version of the HighBeam experiential tech studio website, ready for deployment on any traditional web hosting.

## Folder Structure

```
static-site/
├── index.html          # Home page
├── capabilities.html   # Capabilities/Services page
├── work.html          # Portfolio listing page
├── process.html       # Process page
├── about.html         # About page
├── agencies.html      # For Agencies page
├── contact.html       # Contact page
├── work/              # Project detail pages
│   ├── feedback-wall.html
│   ├── fifa-fan-wall.html
│   ├── golden-voice.html
│   └── qcert-vr.html
├── css/
│   └── styles.css     # Main stylesheet
├── js/
│   └── main.js        # JavaScript for interactions
├── images/            # All images and video
├── og-images/         # Open Graph images for social sharing
└── php/
    └── contact.php    # Contact form handler
```

## Deployment Instructions

### Step 1: Configure the Contact Form

Before uploading, edit `php/contact.php` and replace the API key:

```php
$SMTP2GO_API_KEY = 'YOUR_SMTP2GO_API_KEY'; // Replace with your actual key
```

You can get an API key from [SMTP2GO](https://www.smtp2go.com/).

### Step 2: Upload to Your Hosting

1. Connect to your hosting via FTP or file manager
2. Upload all contents of this `static-site/` folder to your web root (usually `public_html/` or `www/`)
3. Make sure the folder structure is preserved

### Step 3: Verify PHP is Enabled

The contact form requires PHP to be enabled on your hosting. Most shared hosting providers include PHP by default.

## Requirements

- Any web hosting with PHP 7.0+ support
- SMTP2GO account for email sending
- SSL certificate recommended (most hosts provide free Let's Encrypt)

## Customization

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
  --color-primary: #FFD300;  /* Yellow accent */
  --color-background: #0A0A0A;
  /* ... */
}
```

### Fonts
The site uses Google Fonts (Inter and Space Grotesk). To change fonts, update the `<link>` tags in each HTML file's `<head>` section.

### Images
Replace images in the `images/` folder. Recommended sizes:
- Logo: 48px height (PNG with transparency)
- Hero video: MP4, ~2MB, loop-friendly
- Project images: 1200x900px minimum

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Features

- Responsive design (mobile, tablet, desktop)
- CSS animations and hover effects
- Scroll-based animations
- Mobile navigation menu
- Contact form with validation
- SEO-optimized meta tags
- Open Graph tags for social sharing

## License

© 2025 HighBeam Studio. All rights reserved.
