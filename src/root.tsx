import * as ReactDOM from 'react-dom';
import App from './elements/App';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './lib/StatesController';

function render() {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
        , document.body);
}

render();