/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        healthcare: {
          blue: '#2563eb',
          lightBlue: '#dbeafe',
          white: '#ffffff',
          gray: '#f8fafc',
          darkGray: '#64748b',
        }
      },
      fontSize: {
        'xs': ['14px', '20px'],
        'sm': ['16px', '24px'],
        'base': ['18px', '28px'],
        'lg': ['20px', '30px'],
        'xl': ['24px', '32px'],
        '2xl': ['30px', '38px'],
        '3xl': ['36px', '44px'],
        '4xl': ['48px', '56px'],
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}