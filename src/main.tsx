import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import NotificationsPage from './pages/Notifications'
import ChatbotPage from './pages/Chatbot'
import { NotificationsProvider } from './context/NotificationsContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotificationsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/chat" element={<ChatbotPage />} />
        </Routes>
      </BrowserRouter>
    </NotificationsProvider>
  </StrictMode>,
)
