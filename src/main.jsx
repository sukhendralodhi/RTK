import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >
    <Provider store={store}>
      <App />
    </Provider>
  </RouterProvider>
  </StrictMode >,
)
