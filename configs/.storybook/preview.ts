import type { Preview } from '@storybook/react';
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import '../../src/app/index.css';
import '../../src/app/svg';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

fetch('main.svg')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('afterbegin', data);
  })
  .catch(error => console.error('Error loading SVG:', error));

export default preview;
