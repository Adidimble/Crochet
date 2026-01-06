# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your crochet portfolio website to GitHub Pages for free hosting.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Your website files ready

## 🔧 Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `pooja-crochet-portfolio`)
5. Make it **Public** (required for free GitHub Pages)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 2. Upload Your Files

#### Option A: Using GitHub Web Interface (Easiest)
1. On your new repository page, click "uploading an existing file"
2. Drag and drop all your website files
3. Write a commit message: "Initial website upload"
4. Click "Commit changes"

#### Option B: Using Git Commands
```bash
# Navigate to your project folder
cd "C:\Users\Coditas-Admin\Desktop\New folder\Pooja"

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial website upload"

# Add remote repository (replace with your GitHub URL)
git remote add origin https://github.com/yourusername/pooja-crochet-portfolio.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 4. Access Your Website

- Your website will be available at: `https://yourusername.github.io/repository-name`
- It may take 5-10 minutes to become live
- GitHub will show you the URL in the Pages settings

## 🎯 Custom Domain (Optional)

If you want to use your own domain (e.g., `www.poojarawool.com`):

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In your repository, create a file named `CNAME` (no extension)
3. Add your domain name to the file: `www.poojarawool.com`
4. In your domain registrar's DNS settings, add these records:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

## 🔄 Updating Your Website

Whenever you want to update your website:

#### Using GitHub Web Interface:
1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon to edit
4. Make your changes
5. Commit changes

#### Using Git:
```bash
# Make your changes to files
# Then commit and push:
git add .
git commit -m "Update website content"
git push
```

Changes will appear on your live website within a few minutes.

## 📊 Adding Google Analytics (Optional)

To track visitors:

1. Create a Google Analytics account
2. Get your tracking ID (e.g., G-XXXXXXXXXX)
3. Add this code before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔍 SEO Optimization

### 1. Update Meta Tags
In `index.html`, update these lines with your actual information:
```html
<meta property="og:url" content="https://yourusername.github.io/repository-name">
<meta property="og:image" content="https://yourusername.github.io/repository-name/assets/images/hero-crochet.jpg">
```

### 2. Submit to Search Engines
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### 3. Create a Sitemap
Add this file as `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourusername.github.io/repository-name/</loc>
    <lastmod>2025-01-06</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 📱 Testing Your Website

Before going live, test your website:

1. **Responsive Design**: Check on different screen sizes
2. **Loading Speed**: Use [PageSpeed Insights](https://pagespeed.web.dev/)
3. **Broken Links**: Verify all links work
4. **Images**: Ensure all images load properly
5. **Contact Form**: Test form submission
6. **Cross-browser**: Test in Chrome, Firefox, Safari, Edge

## 🛠️ Troubleshooting

### Common Issues:

**Website not loading:**
- Wait 10-15 minutes after enabling Pages
- Check that `index.html` is in the root folder
- Verify repository is public

**Images not showing:**
- Check file paths are correct
- Ensure images are uploaded to the repository
- Verify image file names match exactly (case-sensitive)

**CSS/JS not loading:**
- Check file paths in HTML
- Ensure CSS and JS files are uploaded
- Clear browser cache

**404 Error:**
- Check the repository name in the URL
- Verify GitHub Pages is enabled
- Make sure the repository is public

## 📞 Support

If you encounter issues:
1. Check [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Search [GitHub Community](https://github.community/)
3. Contact GitHub Support

## 🎉 Congratulations!

Your crochet portfolio website is now live and accessible to the world! Share your URL with friends, family, and potential customers.

Remember to:
- Keep your content updated
- Add new photos regularly
- Monitor website performance
- Engage with visitors through your contact form

---

**Happy crafting and happy coding! 🧶✨**
