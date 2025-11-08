import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { configureStore } from '@reduxjs/toolkit';

// import './excercise';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(rootReducer, composeWithDevTools()); > configureStore 내부에 포함

const store = configureStore({
  reducer:rootReducer,
  devTools: process.env.NODE_ENV !== 'production', // DevTools 사용 여부 설정 가능
});

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
