/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#ffffff',
        gray: {
          1: '#3A3A3A',
        },
        orange: {
          1: '#FF5C31',
        },
        red: {
          1: '#6E1E29',
          2: '#D37A87',
          3: '#F4C5CB',
          4: '#FEF4F3',
        },
        blue: {
          1: '#448FFF',
        },
        green: {
          1: '#26B510',
        },
        yellow: {
          1: '#FFC328',
        },
        purple: {
          1: '#8642DE',
        },
      },
    },
  },
  plugins: [],
};
