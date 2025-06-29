# Aanjan Samaj - Spiritual Community Website

A beautiful, responsive static website for Aanjan Samaj spiritual community built with React.js and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **SEO Optimized**: Meta tags and structured content for better search visibility
- **Fast Loading**: Optimized static site with minimal dependencies
- **Accessible**: Following web accessibility guidelines
- **Modern Tech Stack**: React.js, React Router DOM, Tailwind CSS

## 📄 Pages

- **Home**: Hero section, spiritual highlights, events preview, blog preview
- **About Us**: Mission, vision, history, core values, leadership
- **Events**: Upcoming and past events with detailed information
- **Blogs**: Spiritual articles and insights with category filtering
- **Gallery**: Photo and video gallery with lightbox functionality
- **Contact**: Contact form, temple information, map, FAQ

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS v3
- **SEO**: React Helmet
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages ready

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aanjan-samaj.git
   cd aanjan-samaj
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Footer with links and social media
│   ├── Card.js         # Reusable card component
│   ├── EventItem.js    # Event display component
│   ├── BlogItem.js     # Blog post component
│   └── GalleryItem.js  # Gallery item component
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── About.js        # About page
│   ├── Events.js       # Events page
│   ├── Blogs.js        # Blog page
│   ├── Gallery.js      # Gallery page
│   └── Contact.js      # Contact page
├── App.js              # Main app component with routing
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Design System

### Colors
- **Primary**: Spiritual gold/orange theme
- **Secondary**: Warm complementary colors
- **Neutral**: Clean grays for text and backgrounds

### Typography
- **Font**: Inter (modern, readable)
- **Hierarchy**: Clear heading and body text distinction

### Components
- **Cards**: Consistent card design with hover effects
- **Buttons**: Primary and secondary button styles
- **Forms**: Clean, accessible form styling

## 🌐 Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/aanjan-samaj"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Other Platforms

The build folder can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- Optimized images with proper sizing
- Lazy loading for gallery images
- Minimal JavaScript bundle
- CSS optimizations with Tailwind's purge

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content
- Update content in respective page components
- Modify images in the `public` folder
- Customize meta tags in page components

## 📧 Contact

For questions about this project:
- Email: info@aanjansamaj.org
- Website: [aanjansamaj.org](https://aanjansamaj.org)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by ISKCON.org design principles
- Built with love for the spiritual community
- Thanks to all contributors and community members

---

**Note**: This is a static website template. For dynamic features like contact forms, blog management, or user authentication, consider integrating with a headless CMS or backend service.
