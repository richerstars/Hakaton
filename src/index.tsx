import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import reportWebVitals from './reportWebVitals';
import {NotificationContextProvider} from "./context/NotificationContent";
// import NavigateProvider from "../src/context/NavigateContext";

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        {/*<NavigateProvider>*/}
        <NotificationContextProvider>
            <App />
        </NotificationContextProvider>
        {/*</NavigateProvider>*/}
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
