import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/App"
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
// import reducer from './reducers/cart-control-reducer';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

store.subscribe(() =>
  console.log(store.getState())
);

const defaultStyle = {
  // minHeight: "100%",
  marginBottom: "0%",
  minHeight: "100vh"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <App style={defaultStyle} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
