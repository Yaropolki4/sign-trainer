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
      button: '#ba741a',
    },
    fontSize: {
      xxl: ['18px', '1.4'],
      xl: ['16px', '1.4'],
      base: ['14px', '1.4'],
      sm: ['12px', '1.4'],
      xs: ['10px', '1.4'],
    },
    borderWidth: {
      1: '1px',
      2: '2px',
    },
    fontFamily: {
      default: ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        accent: 'inset 0 0 0 2px #FCAE4D',
      },
    },
  },
  plugins: [],
};
