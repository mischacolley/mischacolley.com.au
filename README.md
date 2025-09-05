# Mischa Colley - Personal Website

A modern personal website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Next.js 15.4.6** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Node.js 22.18.0** - JavaScript runtime
- **Markdown** - Blog posts with `gray-matter` and `remark`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── not-found.tsx      # Custom 404 page
│   ├── history/           # History page
│   ├── now/               # Now page
│   ├── work/              # Work page
│   └── posts/             # Blog posts
│       ├── page.tsx       # Posts listing
│       └── [slug]/        # Dynamic post pages
├── assets/                # Static assets
│   ├── images/            # Images and photos
│   ├── svg/               # SVG icons
│   └── client-logos/      # Client logos
├── components/            # React components
│   └── Header.tsx         # Navigation header
└── lib/                   # Utility functions
    └── posts.ts           # Markdown processing
```

## 🛠️ Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Blog Posts

Blog posts are written in Markdown and stored in `src/posts/`. Each post directory contains:

- `index.md` - The post content
- `featured_image.jpg` - Post thumbnail
- Additional images as needed

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Custom font** - Monospace font family
- **Responsive design** - Mobile-first approach
- **Brand colors** - Custom color palette

## 📱 Features

- ✅ Responsive design
- ✅ SEO optimized with metadata
- ✅ Social sharing images
- ✅ Blog with markdown support
- ✅ Custom 404 page
- ✅ TypeScript for type safety
- ✅ Modern Next.js App Router

## 🚀 Deployment

This site is ready for deployment on platforms like:

- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
