import type { Preview } from '@storybook/react';
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import '../../src/app/index.css';
import '../../src/app/svg';
import { allModes } from './modes';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '320px', height: '700px' } },
        tab: { name: 'Tab', styles: { width: '640px', height: '900px' } },
        bigTab: { name: 'BigTab', styles: { width: '768px', height: '900px' } },
        desktop: {
          name: 'Desktop',
          styles: { width: '1024px', height: '900px' },
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      modes: allModes,
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
