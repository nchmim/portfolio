/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '1301': 1301,
        // Add other z-index values as needed
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
