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

## 🪝 Git hooks

Run this once per clone:

```bash
git config core.hooksPath .githooks
```

`.githooks/pre-commit` stamps "last updated" dates into
`src/content/last-updated.json` for the pages listed in
`scripts/stamp-last-updated.mjs`, and stages the JSON with your commit.

The stamp happens at commit time rather than build time because Vercel builds
from a shallow clone (`git clone --depth=10`), so `git log -- <page>` is blind
to any page that has not changed in the last ten commits — which is the normal
state of the now page. Without the hook configured the dates simply go stale;
nothing breaks.

## 🚀 Deployment

Deployed on Vercel. `next.config.js` sets `output: 'export'`, so the build is a
plain static site and any static host would serve it.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
