import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import customStore from './redux/custom-store';
import './index.css';
import reportWebVitals from './reportWebVitals';

const rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={customStore.getState()}
                dispatch={customStore.dispatch.bind(customStore)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender();

customStore.subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
