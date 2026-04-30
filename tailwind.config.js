/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core Branding
        brand: {
          dark: '#0A2540',    // Your 'primary' - Deep Midnight Blue
          royal: '#003366',   // Your 'secondary' - Strong Navy
          blue: '#3A86FF',    // Your 'accent' - Vibrant Tech Blue
          gold: '#facc15',    // Adding a Gold for the 'Royal' feel
        },
        // UI States
        success: '#06D6A0',   // Your 'highlight'
        surface: '#F8F9FA',   // Light background
        base: '#1A1A1A',      // Your 'text'
        muted: '#64748B',     // Muted labels
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem', // Perfect for those large Bento-style cards
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'bento': '0 20px 25px -5px rgba(0, 0, 0, 0.04), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}