import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { SpeedInsights } from '@vercel/speed-insights/react';
import App from './App';
import { store } from './utils/StoreSetup/store';
import reportWebVitals from './reportWebVitals';
import './fonts/Nabla.ttf';
import './fonts/Tangerine.ttf';
import './fonts/NeurialGrotesk.otf';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import './index.css';

const offlineImageUrl = '/assets/Offline/Offline.png';

const img = new Image();
img.src = offlineImageUrl;

window.offlineImg = img;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>

        {/* Wraps Store Provider */}
        <Provider store={store}>

            {/* Wraps React Router */}
            <Router>

                {/* Renders App */}
                <App />

            </Router>

        </Provider>

        <SpeedInsights />

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();