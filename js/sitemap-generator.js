/**
 * Dynamic Sitemap Generator
 * Generates sitemap.xml with current dates and URLs
 */

function generateSitemap() {
    const currentDate = new Date().toISOString().split('T')[0];
    const baseUrl = WEBSITE_CONFIG?.site?.url || 'https://yourusername.github.io/pooja-crochet-portfolio';
    
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/#about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#gallery</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/#products</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/#contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

    return sitemapContent;
}

function generateRobotsTxt() {
    const baseUrl = WEBSITE_CONFIG?.site?.url || 'https://yourusername.github.io/pooja-crochet-portfolio';
    
    const robotsContent = `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Disallow crawling of certain files
Disallow: /assets/images/placeholder-generator.js
Disallow: /.git/
Disallow: /node_modules/`;

    return robotsContent;
}

// Function to download generated files (for development use)
function downloadSitemap() {
    const content = generateSitemap();
    const blob = new Blob([content], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
}

function downloadRobotsTxt() {
    const content = generateRobotsTxt();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// Console helper for development
if (WEBSITE_CONFIG?.dev?.enableConsoleLogging) {
    console.log('🗺️ Sitemap Generator loaded');
    console.log('💡 Use downloadSitemap() and downloadRobotsTxt() to generate updated files');
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateSitemap,
        generateRobotsTxt,
        downloadSitemap,
        downloadRobotsTxt
    };
}
