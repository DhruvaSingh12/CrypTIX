import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: {
          light: '#3a86ff',
          DEFAULT: '#023e8a',
          dark: '#03045e',
        },
        customGreen: {
          light: '#48b9a7',
          DEFAULT: '#007f5f',
          dark: '#004f2d',
        },
        customPink: {
          light: '#ffadad',
          DEFAULT: '#ff5d5d',
          dark: '#a30000',
        },
        grey: {
          light: '#d1d5db', 
          DEFAULT: '#6b7280', 
          dark: '#374151', 
        },
        blue: {
          light: '#bfdbfe', 
          DEFAULT: '#3b82f6', 
          dark: '#1e40af', 
        },
      },
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
};

export default config;
