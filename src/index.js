import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const call = () => {
  console.log('event1');
}

const call2 = {
  1: 'event',
  2: [23, 34],
  t: (a) => {
  //  const b = a.toUpperCase();
    console.log(a);
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App slem={call} object2={call2}/>
  </React.StrictMode>
);

