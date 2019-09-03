import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBalanceScale,
    faAd,
    faBars,
    faPlusCircle,
    faPencilRuler,
    faDownload,
} from '@fortawesome/free-solid-svg-icons';
import MainMenu from './components/Layout/MainMenu/MainMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import RouterContainer from './components/Layout/RouterContainer';
import SideMenu from './components/Layout/SideMenu/SideMenu';
import './App.css';
import './App.sass';

library.add(
    faBalanceScale,
    faAd,
    faBars,
    faPlusCircle,
    faPencilRuler,
    faDownload,
);

const App: React.FC = () => {
    const user = { name: 'joshb_lv', loggedIn: true };
    return (
        <UserProvider value={user}>
            <Router>
                <div className="App">
                    <div className="columns">
                        <div className="column">
                            <MainMenu />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-1">
                            <SideMenu />
                        </div>
                        <div className="column is-11">
                            <RouterContainer />
                        </div>
                    </div>
                </div>
            </Router>
        </UserProvider>
    );
};

export default App;