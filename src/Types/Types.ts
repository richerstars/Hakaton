import React from 'react';

export type TInputDiv={
    error?:string|null,
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

export type TInput={
    onChange:void,
    error:string| null,
    hintText:string,
    text:string,
    name?:string,
    options?: any
}

export type TLabel = {
    value: string,
    label:string,
}

export type TRow = {
    description: string,
    id: number|string,
    last_registration_date: string,
    level: string,
    mode: string,
    name: string,
    number_of_participants: number|string,
    place: string,
    players: number|string,
    scenario: string,
    start_date: string,
    status: string,
}
