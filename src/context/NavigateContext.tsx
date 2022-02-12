import React, { useState } from 'react';

type TProps = {
    children: React.ReactNode
};

type TButton = {
    id: number,
    url: string,
    title: string,
}

type TValue = {
    links:Array<TButton>|[],
    setLinks:  React.Dispatch<React.SetStateAction<TButton[]>>
}

const linksToTournament:Array<TButton> = [
    {
        id: 1,
        url: '/openTournament',
        title: 'Open',
    },
    {
        id: 2,
        url: '/activeTournament',
        title: 'Active',
    },
    {
        id: 3,
        url: '/finishedTournament',
        title: 'Finished',
    }
];

// const linksToCup = [
//     {
//         id: 1,
//         url: '/openCup',
//         title: 'Open',
//     },
//     {
//         id: 2,
//         url: '/activeCup',
//         title: 'Active',
//     },
//     {
//         id: 3,
//         url: '/finishedCup',
//         title: 'Finished',
//     }
// ];

export const NavigateContext = React.createContext([]);

const NavigateProvider: React.FC<TProps> = ({ children}) => {
    const [links, setLinks] = useState(linksToTournament);
    console.log(links);
    const value: TValue = {
        links,
        setLinks
    };

    // @ts-ignore
    return <NavigateContext.Provider value={value}>
        {children}
    </NavigateContext.Provider>;

};

export default NavigateProvider;
