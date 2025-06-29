# Netlify Deployment Guide for Aanjan Samaj

## 🚀 Quick Deployment Steps

### Method 1: Drag & Drop (Easiest)

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Visit Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up for a free account (if you don't have one)

3. **Deploy:**
   - Drag and drop the `build` folder from your project to the Netlify deployment area
   - Your site will be deployed instantly with a random URL

### Method 2: Git-based Deployment (Recommended)

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Aanjan Samaj website"
   ```

2. **Push to GitHub:**
   - Create a new repository on GitHub
   - Connect your local repo to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/aanjan-samaj.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "New site from Git"
   - Choose GitHub and authorize Netlify
   - Select your `aanjan-samaj` repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `build`
   - Click "Deploy site"

## 🔧 Build Settings

The following settings are automatically configured via `netlify.toml`:

- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- **Node Version:** 18
- **Redirects:** All routes redirect to `/index.html` for SPA routing

## 🌐 Custom Domain (Optional)

1. In your Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name
4. Follow the DNS configuration instructions

## 📱 Features Enabled

✅ **Single Page Application (SPA) routing**
✅ **HTTPS by default**
✅ **Global CDN**
✅ **Automatic deployments from Git**
✅ **Build previews for pull requests**
✅ **Form handling (contact form ready)**

## 🔍 Post-Deployment Checklist

- [ ] Test all pages and navigation
- [ ] Verify responsive design on mobile
- [ ] Check contact form functionality
- [ ] Test image loading in gallery
- [ ] Verify SEO meta tags

## 🛠️ Troubleshooting

**Build Fails:**
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check for TypeScript or ESLint errors

**Routing Issues:**
- Ensure `netlify.toml` redirects are configured
- Check that all internal links use React Router `Link` components

**Performance:**
- Use Netlify's built-in optimization features
- Enable gzip compression (automatic)
- Optimize images before deployment

## 📞 Support

For deployment issues:
- Netlify Documentation: [docs.netlify.com](https://docs.netlify.com)
- Netlify Community: [community.netlify.com](https://community.netlify.com)

Your website will be available at: `https://your-site-name.netlify.app`
