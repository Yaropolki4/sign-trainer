/** @type {import('tailwindcss').Conf,ig} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      primary: '#3F3A36',
      secondary: '#7D7D7D',
      'fill-primary': '#F9F9F9',
      'fill-secondary': '#F6E9DA',
      'fill-hover-primary': '#F6E9DA',
      'fill-active-primary': '#fee9cf',
      'fill-hover-secondary': '#fee9cf',
      'fill-active-secondary': '#fee9cf',
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
      0.5: '0.5px',
      1: '1px',
      1.5: '1.5px',
      2: '2px',
    },
    fontFamily: {
      default: ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        accent: 'inset 0 0 0 2px #FCAE4D',
      },
      padding: {
        4.5: '18px',
      },
      gridTemplateColumns: {
        100: 'repeat(100, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
