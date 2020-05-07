import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import * as serviceWorker from './serviceWorker';

import './presentation/index.scss';
import App from './Layout';

const root = document.getElementById('root')!;
const app =
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>;

const hydrate = root.hasChildNodes();
const reactRoot = (ReactDOM as any).unstable_createRoot(root, { hydrate });
reactRoot.render(app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
