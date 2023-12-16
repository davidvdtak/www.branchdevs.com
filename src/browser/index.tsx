// Load polyfills (once, on the top of our web app)
import "core-js/stable";
import "regenerator-runtime/runtime";

import "./index.css";

/**
 * Frontend code running in browser
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider } from "../context/Config";
import { Config } from "../server/config";
import App from "../App";

const config = (window as any).__CONFIG__ as Config;
delete (window as any).__CONFIG__;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ConfigProvider config={config}>
    <App />
  </ConfigProvider>
);