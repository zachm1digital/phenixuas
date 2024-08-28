/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '95.9375rem' },
      // => @media (max-width: 1535px) { ... }

      xdCanvas: { min: '90rem' },

      newsbp: { max: '82.5rem' },
      // => @media (max-width: 1320px) { ... }

      xl: { max: '79.9375rem' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '63.9375rem' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '47.9375rem' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '39.9375rem' },
      // => @media (max-width: 639px) { ... }

      xsm: { max: '26.25rem' }
      // => @media (max-width: 420px) { ... }
    },
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)']
      },
      textColor: {
        phenix: {
          onbackground: 'var(--color-text-onbackground)',
          onprimary: 'var(--color-text-onprimary)',
          primary: 'var(--color-text-primary)',
          ondark: 'var(--color-text-ondark)',
          gray001: 'var(--color-text-gray001)',
          gray002: 'var(--color-text-gray002)'
        }
      },
      backgroundColor: {
        phenix: {
          primary: 'var(--color-primary)',
          'onprimary-hover': 'var(--color-primary-hover)',
          'onprimary-active': 'var(--color-primary-active)',
          background: 'var(--color-background)',
          background2: 'var(--color-background-2)',
          dark: 'var(--color-background-dark)',
          dark2: 'var(--color-background-dark2)',
          dark3: 'var(--color-background-dark3)'
        }
      },

      borderColor: {
        phenix: {
          primary: 'var(--color-primary)',
          stroke: 'var(--color-stroke)',
          stroke2: 'var(--color-stroke2'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwind-scrollbar')]
};
