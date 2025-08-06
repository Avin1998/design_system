
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import AppWithRouting from './AppWithRouting';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render both versions - the original and the new routed version
// Comment out one to test the other
root.render(
  <React.StrictMode>
    {/* Original App */}
    {/* <App /> */}
    
    {/* New App with Routing */}
    <AppWithRouting />
  </React.StrictMode>
);
