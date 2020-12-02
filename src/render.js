import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './redux/state';
import {editTextNewPost} from './redux/state';

export let rerender = (State) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App appState={State} addPost={addPost} editTextNewPost={editTextNewPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

//addPost должен быть State.addPost








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
