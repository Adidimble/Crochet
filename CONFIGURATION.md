# 🔧 Configuration Guide

This guide explains how to customize your crochet portfolio website using the new dynamic configuration system.

## 📋 Quick Setup

All website customization is now centralized in `js/config.js`. Simply update the values in this file to customize your entire website!

## 🎯 Essential Updates (Do These First!)

### 1. Personal Information
```javascript
owner: {
    name: 'Pooja Rawool',                    // ✏️ Your full name
    email: 'your.email@gmail.com',           // ✏️ Your real email address
    instagram: '@your_instagram_handle',      // ✏️ Your Instagram handle
    yearsOfExperience: 5,                    // ✏️ Years you've been crocheting
    responseTime: 'Usually within 24 hours'  // ✏️ Your typical response time
}
```

### 2. Website URLs
```javascript
site: {
    title: 'Your Name - Handcrafted Crochet Creations',
    description: 'Your website description...',
    url: 'https://yourusername.github.io/your-repo-name', // ✏️ Your GitHub Pages URL
    repository: 'your-repo-name'                          // ✏️ Your repository name
}
```

### 3. Social Media Links
```javascript
social: {
    instagram: 'https://instagram.com/your_handle',  // ✏️ Your Instagram URL
    pinterest: 'https://pinterest.com/your_handle',  // ✏️ Your Pinterest URL (optional)
    facebook: 'https://facebook.com/your_page',     // ✏️ Your Facebook URL (optional)
    etsy: 'https://etsy.com/shop/your_shop',        // ✏️ Your Etsy shop URL (optional)
    youtube: 'https://youtube.com/your_channel'      // ✏️ Your YouTube URL (optional)
}
```

## 🎨 Advanced Customization

### Business Information
```javascript
business: {
    location: 'Your City, Country',           // ✏️ Your location
    established: 2020,                       // ✏️ Year you started professionally
    specialties: [                           // ✏️ Your specialties
        'Amigurumi', 
        'Baby Items', 
        'Home Decor', 
        'Accessories', 
        'Custom Orders'
    ],
    priceRange: '$15 - $150',               // ✏️ Your price range
    customOrders: true,                     // ✏️ Do you accept custom orders?
    shipping: {
        domestic: '3-5 business days',       // ✏️ Domestic shipping time
        international: '7-14 business days'  // ✏️ International shipping time
    }
}
```

### Contact Form Subjects
```javascript
contact: {
    subjects: [                              // ✏️ Customize contact form options
        { value: 'custom-order', label: 'Custom Order' },
        { value: 'general-inquiry', label: 'General Inquiry' },
        { value: 'wholesale', label: 'Wholesale Inquiry' },
        { value: 'collaboration', label: 'Collaboration' },
        { value: 'other', label: 'Other' }
    ],
    thankYouMessage: 'Thank you! I\'ll respond soon.' // ✏️ Custom thank you message
}
```

### Gallery Settings
```javascript
gallery: {
    imagesPerLoad: 6,                       // ✏️ How many images to load at once
    categories: [                           // ✏️ Gallery categories
        { id: 'all', name: 'All', count: 0 },
        { id: 'amigurumi', name: 'Amigurumi', count: 0 },
        { id: 'accessories', name: 'Accessories', count: 0 },
        { id: 'home-decor', name: 'Home Decor', count: 0 },
        { id: 'baby-items', name: 'Baby Items', count: 0 }
    ]
}
```

## 🤖 Dynamic Features

### Automatic Updates
The configuration system automatically updates:

- ✅ **Copyright Year** - Always shows current year
- ✅ **Experience Years** - Calculates from your start year
- ✅ **Contact Information** - Updates all instances across the site
- ✅ **Social Media Links** - Shows/hides based on what you provide
- ✅ **Sitemap Dates** - Always current when regenerated
- ✅ **Form Options** - Contact form subjects from config

### Data Attributes
The HTML uses special data attributes that get automatically updated:

```html
<!-- These update automatically from config.js -->
<span data-experience-years>5 years</span>
<p data-email>your.email@gmail.com</p>
<p data-instagram>@your_handle</p>
<p data-response-time>Usually within 24 hours</p>
<a data-social="instagram" href="#">Instagram</a>
```

## 🔄 Updating Your Website

### Method 1: Edit config.js Directly
1. Open `js/config.js` in any text editor
2. Update the values you want to change
3. Save the file
4. Upload to GitHub (your changes will appear automatically)

### Method 2: GitHub Web Interface
1. Go to your repository on GitHub
2. Navigate to `js/config.js`
3. Click the pencil icon to edit
4. Make your changes
5. Commit the changes

## 🛠️ Development Tools

### Console Helpers
Open browser developer tools (F12) and use these commands:

```javascript
// Generate updated sitemap with current dates
downloadSitemap()

// Generate updated robots.txt with your URLs
downloadRobotsTxt()

// Check configuration for issues
CONFIG_UTILS.validateConfig()

// Get current year
CONFIG_UTILS.getCurrentYear()

// Get formatted experience text
CONFIG_UTILS.getExperienceText()
```

### Validation
The system automatically checks your configuration and warns you about:
- Placeholder email addresses
- Placeholder URLs
- Missing social media links
- Other common setup issues

## 🎯 SEO Configuration

```javascript
seo: {
    keywords: 'crochet, handmade, crafts, your name, yarn, accessories', // ✏️ Your keywords
    author: 'Your Name',                                                 // ✏️ Your name
    ogImage: '/assets/images/hero-crochet.jpg'                          // ✏️ Social media image
}
```

## 🚀 Future Features

Enable upcoming features by setting these to `true`:

```javascript
features: {
    enableAnalytics: false,      // Google Analytics integration
    enableChatbot: false,        // Customer chat widget
    enableShoppingCart: false,   // E-commerce functionality
    enableBlog: false,           // Blog section
    enableReviews: false,        // Customer reviews
    enableNewsletter: false      // Email newsletter signup
}
```

## 🔍 Troubleshooting

### Configuration Not Updating?
1. Clear your browser cache (Ctrl+F5)
2. Check browser console for errors (F12)
3. Verify `config.js` is loading before `main.js`

### Validation Errors?
Open browser console and look for warnings:
- ⚠️ Yellow warnings = suggestions
- ❌ Red errors = must fix

### Social Links Not Showing?
- Make sure URLs are complete (include `https://`)
- Check that the social platform name matches exactly
- Empty URLs will hide the link automatically

## 📞 Support

If you need help:
1. Check browser console for error messages
2. Verify all URLs are correct and complete
3. Make sure email addresses don't contain "example.com"
4. Test changes in a private/incognito browser window

## ✅ Configuration Checklist

Before going live, verify:

- [ ] Updated `owner.email` with real email
- [ ] Updated `owner.instagram` with real handle
- [ ] Updated `site.url` with GitHub Pages URL
- [ ] Updated `social` links with real URLs
- [ ] Set correct `yearsOfExperience`
- [ ] Customized `business.location`
- [ ] Updated `business.specialties`
- [ ] Set realistic `business.priceRange`
- [ ] Tested all social media links work
- [ ] Verified contact form subjects are relevant

---

**🎉 That's it! Your website is now fully dynamic and easy to maintain!**

The configuration system makes it simple to keep your website updated as your business grows. Just edit `config.js` and all changes propagate automatically throughout your site.
