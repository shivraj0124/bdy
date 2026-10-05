export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        wine: { 950: '#1F0510', 900: '#350919', 800: '#4A0E24', 700: '#6B1536' },
        rose: { 300: '#F4A6B7', 400: '#E8869A', 500: '#D4607A' },
        blush: '#FFE4EA',
        champagne: '#EBCFA6',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
