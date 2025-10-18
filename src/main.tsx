import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './App.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <LandingPage />
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          borderRadius: "12px",
          background: "rgba(30,30,30,0.95)",
          color: "#fff",
          fontSize: "0.9rem",
          padding: "10px 14px",
        }}
        style={{
          width: "90%",
          maxWidth: "400px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </CartProvider>
  </StrictMode>,
)
