/**
 * Website Configuration
 * Centralized configuration for easy customization
 * Update these values to customize your website
 */

const WEBSITE_CONFIG = {
    // Personal Information
    owner: {
        name: 'Pooja Rawool',
        email: 'pooja.rawool@gmail.com', // UPDATE: Replace with your real email
        instagram: '@pooohhh10', // UPDATE: Replace with your Instagram handle
        yearsOfExperience: 1, // UPDATE: Replace with your actual years of experience
        responseTime: 'Usually within 24 hours' // UPDATE: Your typical response time
    },
    
    // Website Information
    site: {
        title: 'Pooja Rawool - Handcrafted Crochet Creations',
        description: 'Discover beautiful, unique crochet products made with love and attention to detail.',
        url: 'https://yourusername.github.io/pooja-crochet-portfolio', // UPDATE: Replace with your actual GitHub Pages URL
        repository: 'pooja-crochet-portfolio' // UPDATE: Replace with your repository name
    },
    
    // Social Media Links
    social: {
        instagram: 'https://instagram.com/pooohhh10', // UPDATE: Your Instagram URL
        pinterest: 'https://pinterest.com/your_username', // UPDATE: Your Pinterest URL (optional)
        facebook: 'https://facebook.com/your_page', // UPDATE: Your Facebook page URL (optional)
        etsy: '', // UPDATE: Your Etsy shop URL (optional)
        youtube: '' // UPDATE: Your YouTube channel URL (optional)
    },
    
    // Business Information
    business: {
        location: 'Your City, Country', // UPDATE: Your location
        established: 2026, // UPDATE: Year you started crocheting professionally
        specialties: ['Amigurumi', 'Baby Items', 'Home Decor', 'Accessories', 'Custom Orders'],
        priceRange: '₹300 - ₹550', // UPDATE: Your typical price range
        customOrders: true,
        shipping: {
            domestic: '3-5 business days'
        }
    },
    
    // Gallery Settings
    gallery: {
        imagesPerLoad: 6,
        categories: [
            { id: 'all', name: 'All', count: 0 },
            { id: 'amigurumi', name: 'Amigurumi', count: 0 },
            { id: 'accessories', name: 'Accessories', count: 0 },
            { id: 'home-decor', name: 'Home Decor', count: 0 },
            { id: 'baby-items', name: 'Baby Items', count: 0 }
        ]
    },
    
    // Contact Form Settings
    contact: {
        subjects: [
            { value: 'custom-order', label: 'Custom Order' },
            { value: 'general-inquiry', label: 'General Inquiry' },
            { value: 'wholesale', label: 'Wholesale Inquiry' },
            { value: 'collaboration', label: 'Collaboration' },
            { value: 'other', label: 'Other' }
        ],
        autoReply: true,
        thankYouMessage: 'Thank you for your message! I\'ll get back to you soon.',
        // EmailJS Configuration
        // Get these values from https://dashboard.emailjs.com/admin
        emailjs: {
            serviceId: 'service_1ghwi7k', // UPDATE: Your EmailJS Service ID (e.g., 'service_xxxxx')
            templateId: 'template_b21yng2', // UPDATE: Your EmailJS Template ID (e.g., 'template_xxxxx')
            publicKey: 'nrOfl03UcUCuND6YA' // UPDATE: Your EmailJS Public Key (e.g., 'xxxxxxxxxxxxx')
        }
    },
    
    // Images Configuration
    images: {
        // Hero Section Image
        hero: './assets/images/gallery/Pooja.jpg', // Using Pooja's photo as hero
        
        // About Section Image  
        about: './assets/images/gallery/Pooja.jpg', // Photo of Pooja working on crochet
        
        // Social Media Share Image
        ogImage: './assets/images/gallery/Pooja.jpg',
        
        // Gallery Images
        gallery: [
            {
                src: './assets/images/gallery/Pooja.jpg',
                title: 'Pooja at Work',
                description: 'Pooja creating beautiful crochet pieces with love and attention to detail',
                category: 'amigurumi',
                alt: 'Pooja Rawool working on crochet projects'
            }
            // Note: Add more gallery images here as you create them
            // Structure: { src: 'path', title: 'Title', description: 'Description', category: 'category', alt: 'Alt text' }
        ],
        
        // Product Images
        products: [
            {
                src: './assets/images/products/Product_1.jpg',
                title: 'Handcrafted Crochet Scarf',
                description: 'Beautiful handmade crochet piece crafted with premium materials',
                price: '₹700',
                badge: 'Popular',
                alt: 'Handmade crochet product by Pooja Rawool'
            },
            {
                src: './assets/images/products/Product_2.jpg',
                title: 'Handcrafted Crochet Scarf',
                description: 'Unique crochet design perfect for gifts or home decoration',
                price: '₹600',
                badge: 'New',
                alt: 'Handmade crochet product by Pooja Rawool'
            },
            {
                src: './assets/images/products/Product_3.jpg',
                title: 'Handcrafted Crochet Keychain',
                description: 'Elegant crochet piece showcasing traditional techniques',
                price: '₹150',
                badge: 'Featured',
                alt: 'Handmade crochet product by Pooja Rawool'
            },
            {
                src: './assets/images/products/Product_4.jpg',
                title: 'Handcrafted Crochet Flower',
                description: 'Colorful and vibrant crochet design for modern homes',
                price: '₹300',
                badge: 'Trending',
                alt: 'Handmade crochet product by Pooja Rawool'
            },
            {
                src: './assets/images/products/Product_5.jpg',
                title: 'Handcrafted Crochet Beanie',
                description: 'Premium crochet creation with intricate patterns and details',
                price: '₹350',
                badge: 'Best Seller',
                alt: 'Handmade crochet product by Pooja Rawool'
            }
        ]
    },

    // SEO Settings
    seo: {
        keywords: 'crochet, handmade, crafts, Pooja Rawool, handcrafted, yarn, knitting, accessories, amigurumi, baby items',
        author: 'Pooja Rawool',
        ogImage: './assets/images/gallery/Pooja.jpg'
    },
    
    // Feature Flags
    features: {
        enableAnalytics: false, // Set to true when you add Google Analytics
        enableChatbot: false, // Future feature
        enableShoppingCart: false, // Future feature
        enableBlog: false, // Future feature
        enableReviews: false, // Future feature
        enableNewsletter: false // Future feature
    },
    
    // Development Settings
    dev: {
        enableConsoleLogging: true,
        enablePerformanceMonitoring: false,
        apiUrl: '', // For future backend integration
        version: '1.0.0'
    }
};

// Utility functions for configuration
const CONFIG_UTILS = {
    /**
     * Get current year dynamically
     */
    getCurrentYear: () => new Date().getFullYear(),
    
    /**
     * Get formatted date for sitemaps
     */
    getCurrentDate: () => new Date().toISOString().split('T')[0],
    
    /**
     * Get years of experience text
     */
    getExperienceText: () => {
        const years = WEBSITE_CONFIG.owner.yearsOfExperience;
        return years === 1 ? '1 year' : `${years} years`;
    },
    
    /**
     * Get full site URL
     */
    getFullUrl: (path = '') => {
        return WEBSITE_CONFIG.site.url + path;
    },
    
    /**
     * Update page title dynamically
     */
    updatePageTitle: (pageTitle = '') => {
        document.title = pageTitle ? 
            `${pageTitle} - ${WEBSITE_CONFIG.site.title}` : 
            WEBSITE_CONFIG.site.title;
    },
    
    /**
     * Update meta description
     */
    updateMetaDescription: (description = '') => {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = description || WEBSITE_CONFIG.site.description;
        }
    },
    
    /**
     * Validate configuration
     */
    validateConfig: () => {
        const errors = [];
        
        // Check required fields
        if (WEBSITE_CONFIG.owner.email.includes('example.com')) {
            errors.push('Please update the email address in config.js');
        }
        
        if (WEBSITE_CONFIG.site.url.includes('yourusername')) {
            errors.push('Please update the site URL in config.js');
        }
        
        if (WEBSITE_CONFIG.owner.instagram.includes('pooja_crochet_creations')) {
            errors.push('Please update the Instagram handle in config.js');
        }
        
        return errors;
    }
};

// Auto-update dynamic elements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = CONFIG_UTILS.getCurrentYear();
    }
    
    // Update experience years in about section
    const experienceElements = document.querySelectorAll('[data-experience-years]');
    experienceElements.forEach(element => {
        element.textContent = CONFIG_UTILS.getExperienceText();
    });
    
    // Update email addresses
    const emailElements = document.querySelectorAll('[data-email]');
    emailElements.forEach(element => {
        element.textContent = WEBSITE_CONFIG.owner.email;
        if (element.tagName === 'A') {
            element.href = `mailto:${WEBSITE_CONFIG.owner.email}`;
        }
    });
    
    // Update Instagram handles
    const instagramElements = document.querySelectorAll('[data-instagram]');
    instagramElements.forEach(element => {
        element.textContent = WEBSITE_CONFIG.owner.instagram;
        if (element.tagName === 'A') {
            element.href = WEBSITE_CONFIG.social.instagram;
        }
    });
    
    // Update response time
    const responseTimeElements = document.querySelectorAll('[data-response-time]');
    responseTimeElements.forEach(element => {
        element.textContent = WEBSITE_CONFIG.owner.responseTime;
    });
    
    // Update social media links
    const socialLinks = document.querySelectorAll('[data-social]');
    socialLinks.forEach(link => {
        const platform = link.getAttribute('data-social');
        if (WEBSITE_CONFIG.social[platform]) {
            link.href = WEBSITE_CONFIG.social[platform];
            link.style.display = 'inline-flex';
        } else {
            link.style.display = 'none';
        }
    });
    
    // Validate configuration in development
    if (WEBSITE_CONFIG.dev.enableConsoleLogging) {
        const errors = CONFIG_UTILS.validateConfig();
        if (errors.length > 0) {
            console.warn('⚠️ Configuration Issues Found:');
            errors.forEach(error => console.warn(`- ${error}`));
            console.info('💡 Please update js/config.js with your information');
        } else {
            console.info('✅ Configuration looks good!');
        }
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WEBSITE_CONFIG, CONFIG_UTILS };
}
