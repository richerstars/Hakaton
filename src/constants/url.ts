export const URL = {
    SIGN_UP: '/signUp',
    DEFAULT_PAGE: '/',
    SIGN_IN: '/signIn',
    FORGOT_PASSWORD: '/forgotPassword',
    ACCEPT_INVITATION: '/acceptInvitation',
    ERROR_INVITATION: '/errorInvitation',
    NEW_PASSWORD: '/newPassword',
    ERROR_FORGOT_PASSWORD: '/errorForgotPassword',
    TOURNAMENT_LIST: '/tournamentList',
    CREATE_TOURNAMENT: '/createTournament',
    PLAYERS: '/players',
    ADMIN_PAGE: '/adminPage',
    TOURNAMENT_PAGE: '/tournament/:id',
    STATISTIC: './statistic',
    SAVE_LOAD: './saveLoad',
};

export const BACKEND_URL = {
    ACCEPT_INVITATION: 'http://sluipgenius.pp.ua/api/user/accept-invitation',
    FORGOT_PASSWORD: 'http://sluipgenius.pp.ua/api/user/forgot-password',
    NEW_PASSWORD: 'http://sluipgenius.pp.ua/api/user/change-password',
    SIGN_IN: 'http://sluipgenius.pp.ua/api/user/sign-in',
    SIGN_UP: 'http://sluipgenius.pp.ua/api/user/sign-up',
    TOURNAMENT_URL: 'http://sluipgenius.pp.ua/api/tournament/get-tournament',
    TOURNAMENT_TABLE: 'http://sluipgenius.pp.ua/api/tournament/get-championship-table',
    START_TOURNAMENT: 'http://sluipgenius.pp.ua/api/tournament/start-tournament',
    CREATE_TOURNAMENT_URL: 'http://sluipgenius.pp.ua/api/tournament/create',
    PLAYERS_URL: 'http://sluipgenius.pp.ua/api/user/get-users',
    GET_MATCHE_BY_CHAMPIONSHIP: 'http://sluipgenius.pp.ua/api/tournament/get-championship-statistic',
    ADD_USER_TO_TOURNAMENT: 'http://sluipgenius.pp.ua/api/tournament/add-user-to-tournament',
    SET_MATCH_RESULT: 'http://sluipgenius.pp.ua/api/tournament/set-result-match-championship'
};
