import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { Sentry, startMonitoring } from './sentry'
import './styles/site.css'

startMonitoring()

const Fallback = () => (
  <div className="shell">
    <main>
      <h1>Something went wrong</h1>
      <p>This page could not be shown. The error has been reported.</p>
    </main>
  </div>
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sentry.ErrorBoundary fallback={<Fallback />}>
      <App />
    </Sentry.ErrorBoundary>
  </StrictMode>,
)
