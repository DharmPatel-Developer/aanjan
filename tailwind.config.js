/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdeacc',
          200: '#fbd89a',
          300: '#f7c057',
          400: '#f4a638',
          500: '#ea8917',
          600: '#d66d0c',
          700: '#b3530c',
          800: '#924211',
          900: '#773712',
        },
        spiritual: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Georgia', 'ui-serif'],
      }
    },
  },
  plugins: [],
}
