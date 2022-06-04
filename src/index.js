import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import rootReducer from './redux/reducers/index';
import { store } from "./store"
import AuthProvider from "./context/useAuth"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "react-toastify/dist/ReactToastify.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);