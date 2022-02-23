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

export type TTortament = {
    description?: string,
    id: number,
    last_registration_date?: string,
    level: string,
    mode: string,
    name: string,
    number_of_participants: number,
    place: string,
    players: number,
    scenario: string,
    start_date: string,
    status: string,
};

export type TableData = {
    "id": number,
    "score": number,
    "user": {
        "session": [
            {
                "expired_at": string
            }
        ],
        "id": number,
        "login": string,
        "email": string,
        "password": string,
        "role": "user" | "admin",
        "first_name": string,
        "last_name": string,
        "date_of_birthday": string,
        "gender": string,
        "confirmation_send_at": string,
        "activated_at": string,
        "games": number,
        "wins": number,
        "draws": number,
        "loses": number,
        "cup_wins": number
    }};
export type TUser = {
    "id": number,
    "login": string,
    "email": string,
    "password": string,
    "role": "admin" | "user",
    "first_name": string,
    "last_name": string,
    "date_of_birthday": string,
    "gender": "male" | 'female',
    "confirmation_send_at": string,
    "activated_at": string,
    "games": number,
    "wins": number,
    "draws": number,
    "loses": number,
    "cup_wins": number
}

export type TMatch = {
    "id": number,
    "first_user_score": number,
    "second_user_score": number,
    "date_match": string,
    "status": string,
    "first_user": TUser,
    "second_user": TUser
};