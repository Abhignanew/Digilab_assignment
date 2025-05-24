/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
        blue: {
          '600': '#2b63d9',
          '500': '#437ef7',
          '400': '#648ef7',
          '300': '#b1ccfa',
        },
        gray: {
          '900': '#151b27',
          '800': '#272d37',
          '700': '#5f6d7e',
          '600': '#919ba6',
          '500': '#a5abb9',
          '400': '#dae0e6',
          '300': '#f8f9fb',
          '200': '#fafbfc',
        },
        dark: {
          '900': '#151b27',
          '800': '#2b3344',
          '700': '#2e3445',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '14px',
        sm: '15px',
        base: '16px',
        lg: '18px',
        xl: '22px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '52px',
      },
      borderRadius: {
        none: '0',
        sm: '6px',
        md: '10px',
        lg: '24px',
        xl: '56px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};