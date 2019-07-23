import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCheckSquare,
    faCoffee,
    faBalanceScale,
} from '@fortawesome/free-solid-svg-icons';
import MainMenu from './components/Layout/MainMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterContainer from './components/Layout/RouterContainer';
import './App.css';
import './App.sass';

library.add(faCheckSquare, faCoffee, faBalanceScale);

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <MainMenu />
                <RouterContainer />
            </div>
        </Router>
    );
};

export default App;
