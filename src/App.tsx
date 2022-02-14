import * as React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import NewPassword from './components/NewPassword/NewPassword';
import AcceptInvitation from './components/AcceptInvitation/AcceptInvitation';
import ErrorForgotPassword from './components/ErrorForgotPassword/ErrorForgotPassword';
import ErrorInvitation from './components/ErrorInvitation/ErrorInvitation';
import MainLayout from './components/MainLayout/MainLayout';
import LayoutPages from "./components/LayoutPages/LayoutPages";
import {URL} from './constants/url';
import FirstPage from "./components/FirstPage/FirstPage";
import TournamentList from "./components/pages/TournamentList/TournamentList";
import CreateTournament from "./components/pages/CreateTournament/CreateTournament";
import Players from "./components/pages/Players/Players";
import AdminPage from "./components/pages/AdminPage/AdminPage";
import { useState } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './constants/theme';
import Tournament from "./components/pages/Tournament/Tournament";
const App = () =>  {
    const [theme, setTheme] = useState("light");

    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return(
        <>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyle/>
                <Routes>
                    <Route element={<MainLayout theme={theme} toggleTheme={switchTheme}/>}>
                        <Route path={URL.DEFAULT_PAGE} element={<FirstPage/>}/>
                        <Route path={URL.SIGN_IN} element={<SignIn/>}/>
                        <Route path={URL.SIGN_UP} element={<SignUp/>}/>
                        <Route path={URL.ACCEPT_INVITATION} element={<AcceptInvitation />} />
                        <Route path={URL.ERROR_INVITATION} element={<ErrorInvitation />} />
                        <Route path={URL.NEW_PASSWORD} element={<NewPassword/>} />
                        <Route path={URL.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
                        <Route path={URL.ERROR_FORGOT_PASSWORD} element={<ErrorForgotPassword />} />
                    </Route>
                    <Route element={<LayoutPages theme={theme} toggleTheme={switchTheme}/>}>
                        <Route path={URL.TOURNAMENT_LIST} element={<TournamentList theme={theme}/>}/>
                        <Route path={URL.CREATE_TOURNAMENT} element={<CreateTournament/>}/>
                        <Route path={URL.PLAYERS} element={<Players/>}/>
                        <Route path={URL.ADMIN_PAGE} element={<AdminPage/>}/>
                        <Route path={URL.TOURNAMENT_PAGE} element={<Tournament />}/>
                    </Route>
                </Routes>
            </ThemeProvider>
        </>
    );};

export default App;