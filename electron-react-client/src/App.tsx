import React from 'react';
import MainMenu from './components/Layout/MainMenu/MainMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import RouterContainer from './components/Layout/RouterContainer';
import SideMenu from './components/Layout/SideMenu/SideMenu';
import './App.scss';
// import 'antd/dist/antd.css';
// import './colors.scss';

const App: React.FC = () => {
    const user = { name: 'joshb_lv', loggedIn: true };
    return (
        <UserProvider value={user}>
            <Router>
                <MainMenu />
                <div className="container">
                    <RouterContainer />
                </div>
            </Router>
        </UserProvider>
    );
};

export default App;
