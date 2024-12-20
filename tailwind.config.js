/** @type {import('tailwindcss').Conf,ig} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      primary: '#3F3A36',
      secondary: '#7D7D7D',
      'fill-primary': '#F9F9F9',
      'fill-secondary': '#F6E9DA',
      accent: '#FCAE4D',
      warn: '#a60202',
      divider: '#E0E0E0',
      'divider-secondary': '#F1E3D3',
    },
    fontSize: {
      'text-xl': ['18px', '1.4'],
      base: ['14px', '1.4'],
      'text-sm': ['12px', '1.4'],
      'text-xs': ['10px', '1.4'],
    },
    borderWidth: {
      'border-1': '1px',
    },
    fontFamily: {
      default: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
