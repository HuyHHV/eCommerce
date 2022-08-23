import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  
);

