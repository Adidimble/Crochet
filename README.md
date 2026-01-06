# Pooja Rawool - Handcrafted Crochet Creations 🧶

A beautiful, modern static website showcasing handcrafted crochet products and skills. Built with clean HTML, CSS, and JavaScript following best practices for scalability and maintainability.

## 🌟 Features

- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, attractive design with smooth animations
- **Dynamic Image Gallery**: Filterable gallery with categories
- **Product Showcase**: Featured products with inquiry system
- **Contact Form**: Easy way for customers to get in touch
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with keyboard navigation
- **Performance**: Optimized images and efficient code
- **GitHub Pages Ready**: Easy deployment to GitHub Pages

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone https://github.com/yourusername/pooja-crochet-portfolio.git
cd pooja-crochet-portfolio
```

### 2. Add Your Images
Replace placeholder images in the `assets/images/` folder:

- `hero-crochet.jpg` - Main hero image (800x600px recommended)
- `about-pooja.jpg` - Your photo (400x500px recommended)
- `gallery/` folder - Your crochet work images (400x300px recommended)
- `products/` folder - Featured product images (350x300px recommended)

### 3. Customize Content
**NEW: Easy Configuration System!**
Simply edit `js/config.js` to customize your entire website:
- Update contact information (email, social media)
- Modify business details and specialties  
- Adjust response times and pricing
- Set years of experience (auto-calculates)
- Configure contact form options

See `CONFIGURATION.md` for detailed instructions.

### 4. Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → "main" → "/ (root)"
5. Your site will be available at `https://yourusername.github.io/repository-name`

## 📁 Project Structure

```
pooja-crochet-portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All CSS styles
├── js/
│   ├── config.js         # Website configuration (customize here!)
│   ├── main.js           # JavaScript functionality
│   └── sitemap-generator.js # Dynamic sitemap generation
├── assets/
│   ├── images/
│   │   ├── gallery/      # Gallery images
│   │   ├── products/     # Product images
│   │   ├── hero-crochet.jpg
│   │   └── about-pooja.jpg
│   └── favicon.ico       # Website icon
├── README.md             # This file
├── CONFIGURATION.md      # Configuration guide
├── DEPLOYMENT.md         # Deployment instructions
├── GETTING_STARTED.md    # Quick start guide
└── .gitignore           # Git ignore file
```

## 🎨 Customization Guide

### Colors
The website uses a warm, craft-inspired color palette defined in CSS custom properties:
- Primary: `#d4a574` (warm brown/gold)
- Secondary: `#8b5a3c` (darker brown)
- Accent: `#f4e4d6` (light cream)

To change colors, update the CSS custom properties in `css/styles.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### Typography
- Headings: 'Playfair Display' (elegant serif)
- Body text: 'Inter' (clean sans-serif)

### Adding New Gallery Images
1. Add images to `assets/images/gallery/`
2. Update the `galleryImages` array in `js/main.js`
3. Include proper categories: 'amigurumi', 'accessories', 'home-decor', 'baby-items'

### Adding New Products
1. Add images to `assets/images/products/`
2. Update the `productImages` array in `js/main.js`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔧 Technical Features

- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: Easy theme customization
- **Intersection Observer**: Smooth scroll animations
- **Lazy Loading**: Optimized image loading
- **Form Validation**: Client-side form validation
- **Modal System**: Image lightbox functionality
- **Mobile Navigation**: Hamburger menu for mobile
- **Smooth Scrolling**: Enhanced user experience

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 SEO Features

- Semantic HTML structure
- Open Graph meta tags for social media
- Proper heading hierarchy
- Alt text for all images
- Structured data ready
- Fast loading times

## 🚀 Performance Optimizations

- Optimized CSS (no unused styles)
- Efficient JavaScript (no heavy frameworks)
- Image lazy loading
- Minimal HTTP requests
- Compressed assets

## 📞 Contact & Support

For questions about this website template or customization help:
- Create an issue on GitHub
- Email: [your-email@example.com]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Google Fonts for typography
- Font Awesome for icons
- Inspiration from modern craft and portfolio websites

---

**Made with ❤️ and lots of yarn by Pooja Rawool**

## 🔄 Future Enhancements

Planned features for future versions:
- Shopping cart functionality
- Payment integration
- Customer reviews system
- Blog section
- Multi-language support
- Admin panel for content management

---

### 📝 Notes for Pooja:

1. **Replace all placeholder images** with your actual crochet photos
2. **Update contact information** in the HTML file
3. **Customize the about section** with your personal story
4. **Add your social media links** in the footer
5. **Test the contact form** and set up form handling if needed
6. **Optimize images** before uploading (compress for web)
7. **Consider adding Google Analytics** for visitor tracking

The website is designed to be easily maintainable and scalable for future enhancements!
