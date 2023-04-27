import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.scss';
import { store } from './store/store';
import { Provider } from 'react-redux';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <App themeT={} /> */}
      {/* <App variant={ThemeForApp.dark}/> */}
      {/* <App isActive={isActive}/> */}
    </Provider>
  </React.StrictMode>
);
