# Build Me - Professional Video Editor Portfolio

A high-fidelity, glassmorphism-designed portfolio website for a professional video editing and post-production studio. Built with React, TypeScript, Tailwind CSS, and Vite.

**Live Repository:** https://github.com/hirshikeshprasaths/PORTFOLIO

## Features

✨ **Glassmorphism Design** - Translucent frosted glass cards with frosted glass effect
🎨 **Dark Modern Aesthetic** - Deep purple, neon teal, and midnight blue gradient backgrounds
🎬 **Portfolio Gallery** - Filterable project showcase with 6 professional examples
📱 **Fully Responsive** - Desktop-first design that works on all devices
⚡ **High Performance** - Built with Vite for lightning-fast development and builds
🎭 **Interactive Elements** - Smooth animations, hover effects, and smooth transitions
4K Ready** - Optimized for 4K displays with modern CSS features

## Project Structure

```
src/
├── components/
│   ├── Header.tsx       - Navigation header with glassmorphism style
│   ├── Hero.tsx         - Hero section with featured video preview
│   ├── Portfolio.tsx    - Portfolio gallery with category filtering
│   ├── Services.tsx     - Services showcase
│   ├── About.tsx        - About section with company stats
│   ├── Contact.tsx      - Contact form and information
│   └── Footer.tsx       - Footer with social links
├── App.tsx              - Main application component
├── main.tsx             - Application entry point
├── index.css            - Global styles with glassmorphism utilities
└── vite-env.d.ts        - Vite type definitions
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server
- **PostCSS** - CSS processing

## Installation

```bash
# Install dependencies
npm install

# Start development server (Windows)
.\run-dev.bat

# Or use npm directly
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

### Color Palette
- Dark Background: `#1a0a2e`
- Dark Navy: `#16213e`
- Dark Blue: `#0f3460`
- Neon Teal: `#0ff4d3`
- Neon Purple: `#a855f7`

### Glassmorphism Components
All glass-style cards use:
- Semi-transparent background (rgba with 6% opacity)
- Enhanced backdrop blur effect (20px with saturation)
- Subtle white borders (18% opacity)
- Multi-layer shadows for depth
- Shimmer animation on hover
- Neon glow effects

### Typography
- Font Family: Segoe UI, Roboto, sans-serif
- Primary Color: White (#ffffff)
- Secondary Color: Slate 300 (#cbd5e1)

## Features Breakdown

### Header
- Fixed navigation with glassmorphism style
- Smooth navigation to all sections
- Call-to-action button

### Hero Section
- Large headline with gradient text
- Featured video preview with play button
- Animated gradient orbs in background
- Primary and secondary CTAs

### Portfolio Gallery
- 6 professional video project examples
- Category-based filtering
- Hover effects with play button
- Gradient overlays based on category
- Responsive grid layout

### Services
- 6 service cards (editing, color grading, VFX, sound design, motion graphics, 4K production)
- Icon-based visualization
- Hover animations with underline effect

### About Section
- Company information
- Key statistics (2,500+ projects, 32 awards, 500+ clients, 14 years)
- Three value propositions
- Responsive grid layout

### Testimonials
- 4 professional client testimonials
- 5-star ratings from Netflix, Universal, Tesla, Sundance
- Trusted by industry leaders section

### Contact Section
- Contact information cards (email, phone, location)
- Your Details: 24ec031@psr.edu.in | +91 9363869747 | Chennai, Tamil Nadu
- Contact form with validation
- Social media links
- Glassmorphism styling throughout

### Footer
- Brand information
- Social media links
- Copyright information

## Customization

To customize the portfolio:

1. **Update Brand Info** - Edit the "BUILD ME" text and logo in `Header.tsx` and `Footer.tsx`
2. **Add Portfolio Projects** - Modify the `portfolioItems` array in `Portfolio.tsx`
3. **Update Contact Info** - Edit `contactInfo` in `Contact.tsx`
4. **Change Colors** - Modify the `tailwind.config.js` theme section
5. **Update Services** - Edit the `services` array in `Services.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your portfolio!

## Contact

Build Me Post-Production
- Email: 24ec031@psr.edu.in
- Phone: +91 9363869747
- Location: Chennai, Tamil Nadu
- GitHub: https://github.com/hirshikeshprasaths/PORTFOLIO

---

⭐ **Star this repo if you found it helpful!**

Built with 💙 for creative professionals.

Built with ❤️ for creative professionals.
