import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const root = createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App /> 
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);
