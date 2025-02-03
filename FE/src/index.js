import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import Tailwind CSS
import './styles/tailwind.css';

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Google Fonts
import './styles/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
); 