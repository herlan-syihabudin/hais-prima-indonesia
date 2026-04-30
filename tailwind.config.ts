import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',   // ← Primary utama (biru industrial)
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        secondary: {
          500: '#1E293B',    // ← Slate untuk industrial look
        },
        accent: {
          500: '#F59E0B',    // ← Amber untuk aksen
        },
        dark: '#1f2937',
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['5rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      boxShadow: {
        'industrial': '0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
        'industrial-lg': '0 4px 12px rgba(0,0,0,0.1), 0 8px 28px rgba(0,0,0,0.06)',
        'industrial-xl': '0 8px 24px rgba(0,0,0,0.12), 0 16px 32px rgba(0,0,0,0.08)',
      },
      backgroundImage: {
        'gradient-industrial': 'linear-gradient(135deg, #0EA5E9, #0284C7, #1E293B)',
        'gradient-light': 'linear-gradient(135deg, #F8FAFC, #F1F5F9)',
      },
    },
  },
  plugins: [],
};

export default config;
