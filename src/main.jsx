import { Provider } from "./components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ParallaxProvider } from "react-scroll-parallax";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </Provider>
  </StrictMode>,
)
