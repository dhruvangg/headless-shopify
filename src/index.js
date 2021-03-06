import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
import reportWebVitals from 'reportWebVitals';
import { ThemeProvide } from 'Context/ThemeContext';
import { StoreProvider } from 'Context/StoreContext';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from 'Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvide>
      <AuthProvider>
        <StoreProvider>
          <ToastContainer />
          <App />
        </StoreProvider>
      </AuthProvider>
    </ThemeProvide>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
