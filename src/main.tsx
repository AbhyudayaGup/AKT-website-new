import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global defensive error handlers: log but prevent exceptions from stopping execution in production.
if (typeof window !== 'undefined') {
	window.addEventListener('error', (ev) => {
		// avoid noisy errors from injected third-party scripts; still log useful info
		// eslint-disable-next-line no-console
		console.warn('Global error captured:', ev.message, ev.filename, ev.lineno, ev.colno);
	});
	window.addEventListener('unhandledrejection', (ev) => {
		// eslint-disable-next-line no-console
		console.warn('Unhandled promise rejection:', ev.reason);
	});
}

try {
	const rootEl = document.getElementById('root');
	if (rootEl) {
		createRoot(rootEl).render(<App />);
	} else {
		// eslint-disable-next-line no-console
		console.error('Root element not found');
	}
} catch (err) {
	// catch render-time errors to avoid a blank page on production
	// eslint-disable-next-line no-console
	console.error('Error during app bootstrap:', err);
}
