import React from 'react';
import logo from './logo.svg';
import MainMenu from './components/Layout/MainMenu';
import './App.css';
import './App.sass';

const App: React.FC = () => {
    return (
        <div className="App">
            <MainMenu />
        </div>
    );
};

export default App;
