# Build Me - Professional Video Editor Portfolio

![Build Me Portfolio](https://img.shields.io/badge/Build-Me-cyan)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

A stunning, high-fidelity glassmorphism portfolio website for professional video editors and post-production studios. Features award-winning design with translucent frosted glass cards, neon accents, and cinematic visuals.

## 🎬 Live Demo

Visit the live site: [Build Me Portfolio](#)

## ✨ Features

- **🎨 Glassmorphism Design** - Premium frosted glass effects with backdrop blur and depth
- **🌈 Dark Gradient Background** - Animated deep purple, neon teal, and midnight blue gradients
- **🎯 Portfolio Gallery** - 6 professional video projects with category filtering
- **💼 Professional Services** - Showcase of editing, color grading, VFX, and audio services
- **⭐ Client Testimonials** - Reviews from Netflix, Universal, Tesla, and Sundance
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile
- **⚡ High Performance** - Lightning-fast Vite dev server and optimized builds
- **🎭 Smooth Animations** - Hover effects, transitions, and neon glow effects

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.2
- **Language:** TypeScript 5.3
- **Styling:** Tailwind CSS 3.3
- **Build Tool:** Vite 5.0
- **Post-Processing:** PostCSS with Autoprefixer

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm
- Git

### Clone the Repository

```bash
git clone https://github.com/yourusername/build-me-portfolio.git
cd build-me-portfolio
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Quick Start (Windows)

If you encounter PATH issues with Node.js on Windows:

```bash
# Run using the batch file
run-dev.bat
```

## 📁 Project Structure

```
build-me-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Navigation with glassmorphism
│   │   ├── Hero.tsx           # Hero section with featured video
│   │   ├── Portfolio.tsx      # Portfolio gallery with filtering
│   │   ├── Services.tsx       # Services showcase
│   │   ├── About.tsx          # Company info and statistics
│   │   ├── Testimonials.tsx   # Client testimonials
│   │   ├── Contact.tsx        # Contact form and info
│   │   └── Footer.tsx         # Footer with social links
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # React entry point
│   └── index.css              # Global styles + glassmorphism
├── public/                    # Static assets
├── index.html                 # HTML template
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## 🎨 Customization

### Update Brand Information

Edit `src/components/Header.tsx` and `src/components/Footer.tsx`:

```tsx
<span className="text-xl font-bold">YOUR BRAND</span>
```

### Add Your Projects

Modify `src/components/Portfolio.tsx`:

```tsx
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Commercial",
    description: "Your project description",
    thumbnail: "thumbnail-identifier"
  },
  // Add more projects...
];
```

### Update Contact Information

Edit `src/components/Contact.tsx`:

```tsx
const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    value: "your@email.com",
    link: "mailto:your@email.com"
  },
  // Update phone and location...
];
```

### Customize Colors

Edit `tailwind.config.js`:

```js
colors: {
  'dark-bg': '#1a0a2e',      // Your dark background
  'neon-teal': '#0ff4d3',    // Your accent color
  'neon-purple': '#a855f7',  // Your secondary accent
}
```

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npx tsc --noEmit
```

## 🌟 Key Components

### Glassmorphism Effects

All glass cards use custom CSS classes defined in `src/index.css`:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: /* multi-layer shadows */;
}
```

### Portfolio Categories

Available categories: `All`, `Corporate`, `Music`, `Documentary`, `Commercial`, `Wedding`, `Short Film`

### Testimonials

Features 4 professional testimonials with 5-star ratings from major brands.

## 🎯 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload 'dist' folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Configure GitHub Pages to serve from /dist
```

## 🔧 Configuration

### Vite Configuration

`vite.config.ts` includes React plugin:

```ts
export default defineConfig({
  plugins: [react()],
})
```

### TypeScript Configuration

Strict mode enabled with modern ES2020 target.

### Tailwind Configuration

Custom colors, shadows, and backdrop blur utilities.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

### Node.js not found

Make sure Node.js is installed and in your PATH. On Windows, restart PowerShell after installation.

### npm commands not working

Use the `run-dev.bat` file on Windows if PATH issues persist.

### Port 5173 already in use

Kill the existing process or change the port in `vite.config.ts`:

```ts
export default defineConfig({
  server: { port: 3000 }
})
```

## 📄 License

MIT License - feel free to use this template for your portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👏 Credits

- Design inspired by modern glassmorphism trends
- Built with React, TypeScript, and Tailwind CSS
- Deployed with Vite for optimal performance

## 📞 Contact

Build Me Post-Production
- Email: studio@buildmepost.com
- Phone: +1 (310) 555-EDIT
- Location: Beverly Hills, CA 90210

---

⭐ **Star this repo if you found it helpful!**

Built with 💙 by Build Me
