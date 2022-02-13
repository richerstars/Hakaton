type TButton = {
    id: number,
    url: string,
    title: string,
};

export const links: Array<TButton> = [
    {
        id: 1,
        url: '/tournamentList',
        title: 'Tournaments List',
    },
    {
        id: 2,
        url: '/createTournament',
        title: 'Create Tournament',
    },
    {
        id: 3,
        url: '/players',
        title: 'Players',
    },
    {
        id: 4,
        url: '/adminPage',
        title: 'Admin',
    }
];
export const admin: Array<TButton> = [
    {
        id: 1,
        url: '/tournamentList',
        title: 'sdf',
    },
    {
        id: 4,
        url: '/adminPage',
        title: 'Admin',
    }
];
// export const linksToCup: Array<TButton> = [
//     {
//         id: 1,
//         url: '/openCap',
//         title: 'Open',
//     },
//     {
//         id: 2,
//         url: '/activeCap',
//         title: 'Active',
//     },
//     {
//         id: 3,
//         url: '/finishedCap',
//         title: 'Finished',
//     }
// ];