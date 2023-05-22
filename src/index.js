import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'; // Updated import statement

import App from './App';
import store from './app/store';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);