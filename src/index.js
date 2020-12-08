import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';

let rerender = (storeInFunc) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App state = {storeInFunc.getState()} dispatch={storeInFunc.dispatch.bind(storeInFunc)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


rerender(store);
store.subscribe(()=> {rerender(store)});
//editTextNewPost={storeInFunc.editTextNewPost.bind(storeInFunc)}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
