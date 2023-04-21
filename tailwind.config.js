/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: 'var(--text-main-color)',
      },
      screens: {
        'xl': '1200px',
        '3xl': '2200px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.btn': {
          'padding': '0.25rem 0.75rem',
          'borderWidth': '1px',
          'borderRadius': '0.25rem',
          'transitionDuration': '150ms',
          'cursor': 'pointer',
          'display': 'inline-block',
          'userSelect': 'none',
          'backgroundColor': '#fff',
          '&:hover': {
            backgroundColor: 'rgb(241 245 249 / var(--tw-bg-opacity))',
          },
          '&:active': {
            backgroundColor: 'rgb(226 232 240 / var(--tw-bg-opacity))',
          },
        },
        '.dark-btn': {
          'borderColor': 'transparent',
          'backgroundColor': 'rgb(20,18,18)',
          '&:hover': {
            backgroundColor: 'rgb(0 0 0 / var(--tw-bg-opacity))',
          },
          '&:active': {
            backgroundColor: 'rgb(20,18,18)',
          },
        },
        '.go-link': {
          'cursor': 'pointer',
          'color': 'var(--text-main-color)',
          'opacity': '0.90',
          'transitionDuration': '125ms',
          '&:hover': {
            opacity: '1',
          },
          '&:active': {
            opacity: '0.8',
          },
        },
      }
      addUtilities(newUtilities, ['responsive'])
    },
  ],
  content: [
    './src/**/*.{vue,ts,js}',
  ],
}
