import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, AuthProvider, StoreProvider } from './Context'
import './index.css'
import App from './App'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <StoreProvider>
          <ToastContainer />
          <App />
        </StoreProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
