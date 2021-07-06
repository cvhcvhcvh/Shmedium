import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import { signup, login, logout } from "./actions/session_actions";
import configureStore from "./store/store";


document.addEventListener('DOMContentLoaded', () => {
 
  let preloadedState = undefined
    
    if(window.current_user){
        preloadedState = {
            entities: {
                users: { [window.current_user.id]: window.current_user }
            },
            session:{
                id: window.current_user.id
            }
        }
    } 
  const store = configureStore(preloadedState);

  delete window.current_user

  window.login = login;
  window.store = store;
  window.logout = logout;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});

