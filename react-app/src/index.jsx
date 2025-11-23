import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

async function bootstrap() {
  if (import.meta.env.NODE_ENV === 'development') {
    const { worker } = await import('../mocks/browser');
    worker.start({ onUnhandledRequest: 'bypass' });
  }

  const el = document.getElementById('react-root') || document.getElementById('root');
  if (!el) return;
  const root = createRoot(el);
  root.render(<App />);
}

bootstrap();
