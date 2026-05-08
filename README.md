# DevSec Portfolio

A premium, cybersecurity-inspired developer portfolio featuring interactive sections, glassmorphism, and smooth animations.

## Tech Stack
- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Framer Motion** (motion/react)
- **Lucide Icons**
- **React Hook Form + Zod**

## Features
- 🌑 **Dark Theme Default** with persistence
- 🪄 **Smooth Animations** using Framer Motion
- 📱 **Mobile-First** responsive architecture
- 🛡️ **Cybersecurity Aesthetic** (monospaced fonts, glassmorphism, neon accents)
- 🚀 **Interactive UI** (custom cursor, scroll progress, typing effects)
- 📂 **Component-Based** modular structure
- 📝 **Contact Form** with validation and success states

## Getting Started

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server:
```bash
npm run dev
```

### Build
Build for production:
```bash
npm run build
```

## Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the root directory.
3. Follow the prompts.

### Netlify
1. Drag and drop the `dist` folder into Netlify app.
2. Or use CLI: `netlify deploy --prod`.

### GitHub Pages
1. Install `gh-pages`: `npm install gh-pages --save-dev`
2. Add scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run `npm run deploy`.

## Customization
All personal data is located in `src/data/portfolio.ts`. Simply edit that file to reflect your information.

## License
Apache-2.0
