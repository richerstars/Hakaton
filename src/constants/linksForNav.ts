type TButton = {
    id: number,
    url: string,
    title: string,
};

export const linkForUser: Array<TButton> = [
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
];
export const linkForAdmin: Array<TButton> = [
    {
        id: 1,
        url: '/tournamentList',
        title: 'Tournaments List',
    },
    {
        id: 2,
        url: '/players',
        title: 'PLAYERS',
    },
    {
        id: 3,
        url: '/statistic',
        title: 'STATISTIC',
    },
    {
        id: 4,
        url: '/saveLoad',
        title: 'Save/Load',
    }
];
