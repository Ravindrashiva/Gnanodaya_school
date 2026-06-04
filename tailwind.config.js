// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'marquee-fast': 'marquee 25s linear infinite',
      }
    }
  }
}