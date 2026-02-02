module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a0a2e',
        'dark-navy': '#16213e',
        'dark-blue': '#0f3460',
        'neon-teal': '#0ff4d3',
        'neon-purple': '#a855f7',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 12px 48px rgba(15, 244, 211, 0.15)',
        'neon': '0 0 20px rgba(15, 244, 211, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
      },
    },
  },
  plugins: [],
}
