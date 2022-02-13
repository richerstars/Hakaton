import React, {useState} from "react";
import {TProps,TNotification} from '../Types/Types';
const Context = React.createContext({});

const NotificationContextProvider:React.FC<TProps> = ({children}) => {
    const [state, setState] = useState ({
        type: '',
        message: '',
    });

    const showNotification = ({type, message}:TNotification):void => {
        setState({type, message});
        setTimeout(clearNotification, 3000);
    };

    const clearNotification = ():void => {
        setState({
            type: '',
            message: '',
        });
    };

    return (
        <Context.Provider value={ {notification: {...state}, showNotification }}>
            {children}
        </Context.Provider>
    );
};

export {NotificationContextProvider, Context as NotificationContext};
