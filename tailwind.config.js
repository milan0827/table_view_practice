/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "paid-text-color": "rgb(74, 222, 128)",
        "unpaid-text-color": "rgb(248 113 113)",
        "pending-text-color": "rgb(250 204 21)",
      },
      backgroundColor: {
        "paid-bg-color": "rgb(220 252 231)",
        "unpaid-bg-color": "rgb(254 226 226)",
        "pending-bg-color": "rgb(254 249 195)",
      },
      padding: {
        "paid-padding": "2rem",
        "unpaid-padding": "1.25rem",
        "pending-padding": "1rem",
      },
    },
  },

  plugins: [],
};
