import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import {NotificationContextProvider} from "./context/NotificationContent";

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        <NotificationContextProvider>
            <App />
        </NotificationContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
