import React from 'react';

export type TInputDiv={
    error?:boolean,
}

export type TProps = {
    children: React.ReactNode
};
export type TNotification = {
    type: string,
    message: string,
};
export type TContext = {
    notification: TNotification,
    showNotification:undefined,
}
export type TAxiosBody={
    email?:string,
    password?:string,
    login?:string,
    date_of_birthday?:string,
    gender?:string,
    first_name?:string,
    last_name?:string,
}