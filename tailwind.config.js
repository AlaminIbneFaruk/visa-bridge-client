/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor:['visited'],
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
  daisyui: {
    themes: [{light: {
          primary: "#2563eb",       // Blue shade for light mode
          secondary: "#d97706",     // Amber shade for light mode
          accent: "#14b8a6",        // Teal for accent
          neutral: "#f3f4f6",      // Light gray background
          neutralText:"#1f2937",       
          "base-100":"#ffffff",    
          "primary-content": "#f3f4f6",
        },
        dark: {
          primary: "#1d4ed8",       // Dark blue for dark mode
          secondary: "#292524",     // Dark stone for dark mode
          accent: "#0d9488",        // Dark teal for accent
          neutral: "#1f2937",       // Dark gray background
          neutralText:"#f3f4f6",
          "base-100":"#000000",        
          "primary-content": "#1f2937",
        },}], // Enables both light and dark themes
  },
}
