import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';
import ShoppingList from './ShoppingList';
import withLocalStorage from './withLocalStorage'
import { NotificationProvider } from './context/NotificationContext';
import NotificationBar from './components/NotificationBar';

const root = ReactDOM.createRoot(document.getElementById('root'));

const StorageShoppingList = withLocalStorage('shopping-list', ShoppingList);
const StorageCounter = withLocalStorage('counter', Counter);

root.render(
  <React.StrictMode>
    <NotificationProvider>
      <NotificationBar/>
      {/* <App /> */}
      {/* <Counter/> */}
      <StorageShoppingList/>
      {/* <StorageCounter initial={20}/> */}
    </NotificationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
