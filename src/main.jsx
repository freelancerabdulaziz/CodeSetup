import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/header.css';
import './assets/css/footer.css';
import App from './App';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  { /* component */ }
  </StrictMode>,
)
