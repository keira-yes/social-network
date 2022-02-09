import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { state, addPost, updateNewPostText, subscribe } from './redux/state';
import './index.css';
import reportWebVitals from './reportWebVitals';

const rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender();

subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
