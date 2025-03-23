import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap';				// optional
import { Register } from './components/register/register';
import { Nasa } from './components/nasa/nasa';
import { ChangeColor } from './components/weather/ChangeColor';
import { ChangeImage } from './components/weather/ChangeImage';
import { IntervalDemo } from './components/events/IntervalDemo';
import { CustomDemo } from './components/custom-demo/custom-demo';
import { ToDO } from './components/todo/todo';
import { MUIDemo } from './components/mui-demo/mui-demo';
import { MUITaskDemo } from './components/mui-demo/mui-task-demo';
import { ToDoIndex } from './components/todo/todo-index';
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
  <React.StrictMode>
    {/* <App /> */}
    {/* <Register /> */}
    {/* <IntervalDemo /> */}
    {/* <CustomDemo/> */}
    {/* <ToDO /> */}
    {/* <App /> */}
    {/* <MUIDemo /> */}
    {/* <MUITaskDemo /> */}/
    <ToDoIndex />
  </React.StrictMode>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
