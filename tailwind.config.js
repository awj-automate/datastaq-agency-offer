/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-jakarta)', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        ds: {
          bg: '#F5F0E1',
          surface: '#FAF6EA',
          card: '#FFFFFF',
          border: 'rgba(0,0,0,0.15)',
          primary: '#C9A227',
          'primary-light': '#E5C463',
          'primary-dark': '#8C6F1E',
          'primary-glow': '#D4AF37',
          heading: '#09090B',
          text: '#3F3F46',
          muted: '#71717A',
          subtle: '#A1A1AA',
        },
      },
      letterSpacing: {
        'heading': '-0.04em',
        'heading-tight': '-0.05em',
        'body-tight': '-0.02em',
      },
      borderRadius: {
        'card': '24px',
        'button': '100px',
      },
      animation: {
        'float': 'float 7s ease-in-out infinite',
        'shine': 'shine 0.75s cubic-bezier(0.01,0.56,1,1)',
        'blur-in': 'blurAnimate 0.5s cubic-bezier(0.01,0.56,1,1) forwards',
        'border-rotate': 'borderRotate 5s linear infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { left: '150%' },
          '100%': { left: '-200%' },
        },
        blurAnimate: {
          from: { opacity: '0', filter: 'blur(10px)' },
          to: { opacity: '1', filter: 'blur(0px)' },
        },
        borderRotate: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '300% 50%' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
