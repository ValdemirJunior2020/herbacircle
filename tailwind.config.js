// /tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1f4b2f',
        sage: '#8aaa68',
        mint: '#d9ead7',
        cream: '#fffaf0',
        blush: '#f6d9d2',
        tealsoft: '#d5ece4'
      },
      boxShadow: { soft: '0 18px 55px rgba(31,75,47,.10)' }
    }
  },
  plugins: []
};
