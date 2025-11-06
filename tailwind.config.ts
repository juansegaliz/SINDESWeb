import type { Config } from 'tailwindcss';

export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BF0009',
          600: '#A50008',
          700: '#8C0007',
        },
        secondary: {
          DEFAULT: '#E5E7EB',
          50: '#F9FAFB',
        },
        tertiary: '#9CA3AF',
        quaternary: '#111827',
      },
    },
  },
  plugins: [],
} satisfies Config;
