import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const root = document.getElementById('root') || document.createElement('div');
createRoot(root).render(
<BrowserRouter>
<App />
</BrowserRouter>
);


