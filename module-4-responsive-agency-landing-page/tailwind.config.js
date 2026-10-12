/**
 * Module 4 - Tailwind CSS v3 configuration.
 * Keep index.html listed in `content`, otherwise Tailwind may not generate
 * utility classes used by the landing page.
 */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        ink: '#331B3B',
        accent: '#FDC221',
        cloud: '#ECF7FF',
        blush: '#FFF0E9',
        muted: '#665A6C'
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 50px rgba(51, 27, 59, 0.09)',
        raised: '0 22px 55px rgba(51, 27, 59, 0.13)'
      }
    }
  },
  plugins: []
};
