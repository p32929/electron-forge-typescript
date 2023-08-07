import * as ReactDOM from 'react-dom';
import App from './elements/App';
import React from 'react';
import { Provider } from "overmind-react";
import { createOvermind } from 'overmind'
import { config } from './overmind/OvermindHelper'

const overmind = createOvermind(config)

function render() {
    ReactDOM.render(
        <React.StrictMode>
            <Provider value={overmind}>
                <App />
            </Provider>
        </React.StrictMode>
        , document.body);
}

render();