import React, { StrictMode, Component, ReactNode, ErrorInfo } from 'react';
import { createRoot } from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App.tsx';
import './index.css';

// Automatically register service worker for offline precaching and PWA support
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  try {
    registerSW({
      immediate: true,
      onNeedRefresh() {
        console.log('FUZE PWA: Nová verze je připravena k aktualizaci.');
      },
      onOfflineReady() {
        console.log('FUZE PWA: Aplikace je plně načtena a připravena pro offline provoz.');
        try {
          window.dispatchEvent(new CustomEvent('fuze-offline-ready'));
        } catch {}
      },
      onRegisterError(error) {
        console.warn('PWA registration:', error);
      },
    });
  } catch (err) {
    console.warn('PWA registration warning:', err);
  }
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary zachytil chybu:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#0c0a09',
          color: '#f5f5f4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <div style={{
            maxWidth: '500px',
            backgroundColor: '#1c1917',
            padding: '32px',
            borderRadius: '16px',
            border: '1px solid #44403c',
            textAlign: 'center'
          }}>
            <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#f59e0b', marginBottom: '12px' }}>
              FUZE Akademie – Chyba při načítání
            </h1>
            <p style={{ fontSize: '14px', color: '#a8a29e', marginBottom: '16px' }}>
              Omlouváme se, nastala neočekávaná chyba při vykreslování stránky:
            </p>
            <pre style={{
              backgroundColor: '#0c0a09',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '12px',
              color: '#ef4444',
              textAlign: 'left',
              overflowX: 'auto',
              marginBottom: '20px'
            }}>
              {this.state.error?.message || 'Neznámá chyba'}
            </pre>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              style={{
                backgroundColor: '#d97706',
                color: '#0c0a09',
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Resetovat paměť a načíst znovu
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
