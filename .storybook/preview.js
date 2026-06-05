import '../src/tokens/tokens.css';
import '../src/base.css';

/** @type {import('@storybook/html').Preview} */
const preview = {
  parameters: {
    backgrounds: {
      default: 'sea-foam',
      values: [
        { name: 'sea-foam', value: '#F2F4F1' },
        { name: 'white', value: '#ffffff' },
        { name: 'granite-dark', value: '#252826' },
      ],
    },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '390px', height: '844px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1280px', height: '900px' } },
      },
    },
  },
};

export default preview;
