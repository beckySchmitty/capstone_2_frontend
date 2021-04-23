import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistedStore} from "./store"


/**
 * Renders App.js
 * Creates the Redux store and persistedStore 
 * 
 */

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk)));
