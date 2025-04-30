import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import Login from './Login.tsx';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/style.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App first='Gunel' second='Alxasova' third={5} /> */}
    <Login input1='email' input2='password' input3='checkbox' icon1='warning' icon2='success' icon3='error' />
  </StrictMode>
)
