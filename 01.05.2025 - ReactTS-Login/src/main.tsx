import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Login from './Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App first='Gunel' second='Alxasova' third={5} />
    <Login />
  </StrictMode>
)
