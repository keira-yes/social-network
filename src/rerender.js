import React from 'react';
import ReactDOM from 'react-dom';
import {addPost, updateNewPostText} from './redux/state';
import './index.css';
import App from './App';

export const rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
