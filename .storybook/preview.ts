// import React from 'react';
// import type { Preview } from '@storybook/react';
// import 'src/styles/mui-override.scss';
// import { Provider } from 'react-redux';
// import { useStoryContext } from '@storybook/addons';
// import { withThemeFromJSXProvider } from '@storybook/addon-styling';
// import { store } from '../src/store/store';

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//       expanded: true,
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

// export const decorators = [
//   withThemeFromJSXProvider({
//     themes: {
//       light: theme,
//     },
//     Provider: ThemeProvider,
//     GlobalStyles: CssBaseline,
//   }),
//   (Story) => {
//     const context = useStoryContext();
//     return (
//       <Provider store={store}>
//         <Story {...context} />
//       </Provider>
//     );
//   },
// ];

// export default preview;

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
