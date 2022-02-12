type TButton = {
    id: number,
    url: string,
    title: string,
};

export const linksToTournament: Array<TButton> = [
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

export const linksToCup: Array<TButton> = [
    {
        id: 1,
        url: '/openCap',
        title: 'Open',
    },
    {
        id: 2,
        url: '/activeCap',
        title: 'Active',
    },
    {
        id: 3,
        url: '/finishedCap',
        title: 'Finished',
    }
];