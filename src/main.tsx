import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app/App';
import '@/assets/styles/default.less';
import RootLayout from '@/Layout/RootLayout.tsx';
import '@/assets/fonts/fonts.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootLayout>
      <App />
    </RootLayout>
  </React.StrictMode>,
);
