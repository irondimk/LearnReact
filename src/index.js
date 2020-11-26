import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {likes: 11, message:"Npm, npx, react, jsx learn", avatarsrc:"https://im0-tub-ru.yandex.net/i?id=b57ab827966c1edd0748c1eb53fe6a2e&n=13&exp=1"},
  {likes: 99, message:"First post this", avatarsrc:"https://img.pngio.com/user-profile-avatar-login-account-svg-png-icon-free-download-user-profile-png-980_966.png"}
]

let arr = [
  {id: 1, name: "Iron"},
  {id: 2, name: "Dimk"},
];


ReactDOM.render(
  <React.StrictMode>
    <App pst={posts} dialogusers={arr}/>
  </React.StrictMode>,
  document.getElementById('root')
);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
