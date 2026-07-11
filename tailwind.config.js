/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Replace these with YOUR Figma colors
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',    // ← CHANGE to Figma primary
          600: '#2563EB',    // ← CHANGE to Figma primary dark
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          DEFAULT: '#2563EB',
        },
        secondary: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',    // ← CHANGE to Figma secondary
          600: '#059669',    // ← CHANGE to Figma secondary dark
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          DEFAULT: '#10B981',
        },
        // Add other colors from Figma
      },
      fontFamily: {
        // Replace with Figma font
        sans: ['Inter', 'sans-serif'], // ← CHANGE to Figma font
      },
    },
  },
  plugins: [],
}