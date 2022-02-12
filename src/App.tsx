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
import Main from './components/Main/Main';
import LayoutPages from "./components/LayoutPages/LayoutPages";
import {URL} from './constants/url';
import ActiveCap from "./components/Caps/ActiveCap/ActiveCap";
import FinishedCap from "./components/Caps/FinishedCap/FinishedCap";
import OpenCap from "./components/Caps/OpenCap/OpenCap";
import OpenTournament from "./components/Tournaments/OpenTournament/OpenTournament";
import ActiveTournament from "./components/Tournaments/ActiveTournament/ActiveTournament";
import FinishedTournament from "./components/Tournaments/FinishedTournament/FinishedTournament";

const App = () =>  (
    <Routes>
        <Route element={<MainLayout/>}>
            <Route path={URL.DEFAULT_PAGE} element={<SignIn/>}/>
            <Route path={URL.SIGN_UP} element={<SignUp/>}/>
            <Route path={URL.ACCEPT_INVITATION} element={<AcceptInvitation />} />
            <Route path={URL.ERROR_INVITATION} element={<ErrorInvitation />} />
            <Route path={URL.NEW_PASSWORD} element={<NewPassword/>} />
            <Route path={URL.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
            <Route path={URL.ERROR_FORGOT_PASSWORD} element={<ErrorForgotPassword />} />
        </Route>
        <Route element={<LayoutPages/>}>
            <Route path={URL.OPEN_TOURNAMENT} element={<OpenTournament/>}/>
            <Route path={URL.ACTIVE_TOURNAMENT} element={<ActiveTournament/>}/>
            <Route path={URL.FINISHED_TOURNAMENT} element={<FinishedTournament/>}/>
            <Route path={URL.OPEN_CAP} element={<OpenCap/>}/>
            <Route path={URL.ACTIVE_CAP} element={<ActiveCap/>}/>
            <Route path={URL.FINISHED_CAP} element={<FinishedCap/>}/>
        </Route>
        <Route path={URL.MAIN_PAGE} element={<Main/>}/>
    </Routes>
);

export default App;
