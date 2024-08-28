import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Kashish from './Profile';
// import JSONDisplay from './JSONDisplay';
import reportWebVitals from './reportWebVitals';
// import Data from './List';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Kashish />
    {/* <JSONDisplay /> */}
    {/* <Data /> */}
  </React.StrictMode>
);

reportWebVitals();
