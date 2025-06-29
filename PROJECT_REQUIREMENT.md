# 📘 Project Requirement Document

## 🛠 Project Title
Aanjan Samaj

## 🧰 Tech Stack
- **Frontend**: React.js (with React Router DOM)
- **Styling**: Tailwind CSS
- **Markup**: HTML5, CSS3
- **Deployment**: GitHub Pages

---

## 🎯 Objective
Develop a static, SEO-friendly, and responsive website inspired by [ISKCON.org](https://www.iskcon.org/) to showcase spiritual content, temple information, blogs, events, donations, and galleries.

---

## 📄 Core Pages & Description

| Page          | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| **Home**      | Hero section, spiritual highlights, upcoming events, donation CTA, newsletter signup |
| **About Us**  | Organization's mission, vision, and history                                 |
| **Events**    | List of upcoming and past events with descriptions                          |
| **Blogs**     | Static blog articles on spirituality and teachings                          |
| **Gallery**   | Photo and video galleries (YouTube embeds, static images)                   |
| **Contact Us**| Contact form (non-functional), temple address, map embed (optional)         |
| **Footer**    | Social links, copyright, newsletter                                         |

---

## 💻 Frontend Requirements

- Built with **React Functional Components**
- Use **React Router DOM** for page navigation
- **Responsive design** with Tailwind CSS or Bootstrap
- Reusable components:
  - Header
  - Footer
  - Card
  - EventItem
  - BlogItem
  - GalleryItem
- Basic **SEO meta tags** using `react-helmet`
- All assets served **statically**

---

## 📱 Responsive Design

- Mobile-first approach
- Responsive breakpoints:
  - Mobile: `<768px`
  - Tablet: `768px–1024px`
  - Desktop: `>1024px`
- Layouts tested using Chrome DevTools

---

## 📁 Recommended Folder Structure

```
src/
│
├── assets/           # Static images, logos, icons
├── components/       # Reusable UI components
├── pages/            # Each route/view as a separate component
├── App.js            # Main application wrapper with routes
├── index.js          # React entry point
└── styles/           # Custom styles or Tailwind configuration
```

---

## 🚀 Deployment Options

- Deploy to **Vercel**, **Netlify**, or **GitHub Pages**
- Ensure public accessibility and responsive performance
- GitHub repo should include clear instructions

---

## 🚧 Optional Enhancements (Phase 2)

- Blog content from markdown or CMS
- Google Maps integration on Contact page
- i18n support for multi-language pages
- Headless CMS integration (e.g., Sanity, Strapi)

---

## ✅ Deliverables

- Responsive static React website
- Codebase on GitHub with README and setup instructions
- Live deployed version (GitHub Pages)

---

## 📎 Notes

- No backend or database is required for this version
- Use high-quality free images and placeholder content
- Focus on clean UI, accessibility, and page performance