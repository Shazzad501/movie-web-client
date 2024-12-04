import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import ThemeProvider from './provider/ThemeProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
