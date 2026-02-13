import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import App from './App.jsx'
import { ThemeProvider } from './hooks/useTheme.jsx'
import { BlogProvider } from './context/BlogContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <BlogProvider>
          <App />
        </BlogProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
