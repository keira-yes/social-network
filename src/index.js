import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
    {id: 1, message: "Hello World!", likes: 5},
    {id: 2, message: "My first post...", likes: 12}
]

const dialogs = [
    {id: 1, name: "Name 1"},
    {id: 2, name: "Name 2"},
    {id: 3, name: "Name 3"},
    {id: 4, name: "Name 4"},
    {id: 5, name: "Name 5"},
    {id: 6, name: "Name 6"}
]

const messages = [
    {id: 1, message: "Hi world"},
    {id: 2, message: "How are you doing"},
    {id: 3, message: "Miss you"}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
