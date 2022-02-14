import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {NotificationContextProvider} from "./context/NotificationContent";
// import NavigateProvider from "../src/context/NavigateContext";

ReactDOM.render(
    <BrowserRouter>
        {/*<NavigateProvider>*/}
        <NotificationContextProvider>
            <App />
        </NotificationContextProvider>
        {/*</NavigateProvider>*/}
    </BrowserRouter>,
    document.getElementById('root')
);
