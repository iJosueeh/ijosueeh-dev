import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IJosueehApp } from './IJosueehApp'
import { LanguageProvider } from './context/language'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <IJosueehApp />
    </LanguageProvider>
  </StrictMode>,
)
