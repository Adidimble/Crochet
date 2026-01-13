/**
 * Main JavaScript file for Pooja Rawool's Crochet Portfolio Website
 * Handles navigation, image loading, filtering, and interactive features
 */

// ===== GLOBAL VARIABLES =====
let currentFilter = 'all';
let galleryImages = [];
let productImages = [];
let currentImageIndex = 0;
let imagesPerLoad = WEBSITE_CONFIG?.gallery?.imagesPerLoad || 6;

// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const galleryGrid = document.getElementById('gallery-grid');
const productsGrid = document.getElementById('products-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('load-more-btn');
const contactForm = document.getElementById('contact-form');
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.getElementById('modal-close');
const loadingSpinner = document.getElementById('loading-spinner');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Initialize the application
 */
function initializeApp() {
    setupEventListeners();
    setupNavigation();
    loadImages();
    loadProducts();
    setupIntersectionObserver();
    populateContactForm();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Navigation toggle for mobile
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', toggleMobileNav);
    }
    
    // Navigation scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Gallery filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreImages);
    }
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Modal events
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    if (imageModal) {
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                closeModal();
            }
        });
    }
    
    // Keyboard events
    document.addEventListener('keydown', handleKeyboardEvents);
    
    // Window resize
    window.addEventListener('resize', debounce(handleWindowResize, 250));
}

// ===== NAVIGATION FUNCTIONS =====
function setupNavigation() {
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function toggleMobileNav() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Close mobile nav when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ===== IMAGE LOADING FUNCTIONS =====
/**
 * Load gallery images dynamically from configuration
 */
function loadImages() {
    // Load gallery images from configuration
    galleryImages = WEBSITE_CONFIG?.images?.gallery || [];
    
    // If no gallery images in config, create placeholder message
    if (galleryImages.length === 0) {
        console.warn('No gallery images found in configuration. Please add images to WEBSITE_CONFIG.images.gallery');
        galleryImages = [{
            src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkdhbGxlcnkgSW1hZ2VzIENvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg==',
            title: 'Gallery Coming Soon',
            description: 'New gallery images will be added soon',
            category: 'all',
            alt: 'Gallery images coming soon'
        }];
    }
    
    renderGalleryImages();
}

/**
 * Load product data from configuration
 */
function loadProducts() {
    // Load products from configuration
    productImages = WEBSITE_CONFIG?.images?.products || [];
    
    // If no products in config, create placeholder message
    if (productImages.length === 0) {
        console.warn('No product images found in configuration. Please add images to WEBSITE_CONFIG.images.products');
        productImages = [{
            src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2R1Y3RzIENvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg==',
            title: 'Products Coming Soon',
            description: 'New products will be featured here soon',
            price: 'TBA',
            badge: 'Coming Soon',
            alt: 'Products coming soon'
        }];
    }
    
    renderProducts();
}

/**
 * Render gallery images based on current filter
 */
function renderGalleryImages() {
    if (!galleryGrid) return;
    
    const filteredImages = currentFilter === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === currentFilter);
    
    const imagesToShow = filteredImages.slice(0, currentImageIndex + imagesPerLoad);
    
    galleryGrid.innerHTML = '';
    
    imagesToShow.forEach((image, index) => {
        const galleryItem = createGalleryItem(image, index);
        galleryGrid.appendChild(galleryItem);
    });
    
    // Update load more button visibility
    if (loadMoreBtn) {
        if (imagesToShow.length >= filteredImages.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
    
    // Add animation delay for staggered effect
    const items = galleryGrid.querySelectorAll('.gallery-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
    });
}

/**
 * Create a gallery item element
 */
function createGalleryItem(image, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-category', image.category);
    
    item.innerHTML = `
        <img src="${image.src}" alt="${image.alt}" loading="lazy" onerror="handleImageError(this)">
        <div class="gallery-overlay">
            <div class="gallery-info">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        </div>
    `;
    
    // Add click event to open modal
    item.addEventListener('click', () => openModal(image));
    
    return item;
}

/**
 * Render products
 */
function renderProducts() {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    productImages.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

/**
 * Create a product card element
 */
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.src}" alt="${product.alt}" loading="lazy" onerror="handleImageError(this)">
            <div class="product-badge">${product.badge}</div>
        </div>
        <div class="product-content">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${product.price}</div>
            <div class="product-actions">
                <button class="btn btn-primary btn-small" onclick="contactForProduct('${product.title}')">
                    <i class="fas fa-envelope"></i>
                    Inquire
                </button>
                <button class="btn btn-outline btn-small" onclick="openModal(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                    <i class="fas fa-eye"></i>
                    View
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// ===== FILTER FUNCTIONS =====
function handleFilterClick(e) {
    const filterValue = e.target.getAttribute('data-filter');
    
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Update current filter and reset image index
    currentFilter = filterValue;
    currentImageIndex = 0;
    
    // Re-render gallery with animation
    showLoadingSpinner();
    setTimeout(() => {
        renderGalleryImages();
        hideLoadingSpinner();
    }, 300);
}

function loadMoreImages() {
    currentImageIndex += imagesPerLoad;
    renderGalleryImages();
}

// ===== MODAL FUNCTIONS =====
function openModal(image) {
    if (!imageModal || !modalImage || !modalTitle || !modalDescription) return;
    
    modalImage.src = image.src;
    modalImage.alt = image.alt || image.title;
    modalTitle.textContent = image.title;
    modalDescription.textContent = image.description;
    
    imageModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    modalClose.focus();
}

function closeModal() {
    if (!imageModal) return;
    
    imageModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ===== FORM HANDLING =====
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        const thankYouMessage = WEBSITE_CONFIG?.contact?.thankYouMessage || 'Thank you for your message! I\'ll get back to you soon.';
        showNotification(thankYouMessage, 'success');
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function contactForProduct(productTitle) {
    // Scroll to contact section and pre-fill form
    const contactSection = document.getElementById('contact');
    const subjectSelect = document.getElementById('subject');
    const messageTextarea = document.getElementById('message');
    
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
            if (subjectSelect) {
                subjectSelect.value = 'custom-order';
            }
            if (messageTextarea) {
                messageTextarea.value = `Hi Pooja,\n\nI'm interested in the "${productTitle}". Could you please provide more details about pricing and availability?\n\nThank you!`;
                messageTextarea.focus();
            }
        }, 1000);
    }
}

// ===== UTILITY FUNCTIONS =====
function handleImageError(img) {
    // Replace broken images with placeholder
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIENvbWluZyBTb29uPC90ZXh0Pjwvc3ZnPg==';
    img.alt = 'Image coming soon';
}

function showLoadingSpinner() {
    if (loadingSpinner) {
        loadingSpinner.style.display = 'flex';
    }
}

function hideLoadingSpinner() {
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none';
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

function handleKeyboardEvents(e) {
    // Close modal with Escape key
    if (e.key === 'Escape' && imageModal && imageModal.style.display === 'block') {
        closeModal();
    }
    
    // Navigate gallery with arrow keys when modal is open
    if (imageModal && imageModal.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            // Navigate to previous image (implement if needed)
        } else if (e.key === 'ArrowRight') {
            // Navigate to next image (implement if needed)
        }
    }
}

function handleWindowResize() {
    // Handle any responsive adjustments
    if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ===== ADDITIONAL CSS FOR ANIMATIONS =====
// Add these styles dynamically for JavaScript-driven animations
const additionalStyles = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .btn-small {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// ===== DYNAMIC FORM POPULATION =====
function populateContactForm() {
    const subjectSelect = document.getElementById('subject');
    if (subjectSelect && WEBSITE_CONFIG?.contact?.subjects) {
        // Clear existing options except the first one
        while (subjectSelect.children.length > 1) {
            subjectSelect.removeChild(subjectSelect.lastChild);
        }
        
        // Add dynamic options
        WEBSITE_CONFIG.contact.subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject.value;
            option.textContent = subject.label;
            subjectSelect.appendChild(option);
        });
    }
}

// ===== DYNAMIC CONTENT UPDATES =====
function updateDynamicContent() {
    // Update gallery categories count
    if (WEBSITE_CONFIG?.gallery?.categories) {
        WEBSITE_CONFIG.gallery.categories.forEach(category => {
            if (category.id === 'all') {
                category.count = galleryImages.length;
            } else {
                category.count = galleryImages.filter(img => img.category === category.id).length;
            }
        });
    }
    
    // Update page metadata
    if (WEBSITE_CONFIG?.seo) {
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.content = WEBSITE_CONFIG.seo.keywords;
        }
        
        const metaAuthor = document.querySelector('meta[name="author"]');
        if (metaAuthor) {
            metaAuthor.content = WEBSITE_CONFIG.seo.author;
        }
    }
}

// ===== EXPORT FOR TESTING (if needed) =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeApp,
        loadImages,
        handleFilterClick,
        openModal,
        closeModal,
        populateContactForm,
        updateDynamicContent
    };
}
