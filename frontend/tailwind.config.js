/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Merge the second configuration object here
  ...{
    content: [
      // ... any additional content paths
    ],
    theme: {
      extend: {
        // ... any additional theme customizations
      },
    },
    plugins: [
      // ... any additional plugins
    ],
  },
};