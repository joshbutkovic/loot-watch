import React from 'react';
import TopMenu from './components/Layout/TopMenu/MainMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import RouterContainer from './components/Layout/RouterContainer';
import SideMenu from './components/Layout/SideMenu/SideMenu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import store from './store/store';
library.add(faCheckSquare, faCoffee);
import './App.scss';
// import './colors.scss';

interface State {
    error: {};
}

type ThunkAction2<R> = ThunkAction<R, State, void, Action<any>>;
export type ThunkActionCreator<R> = (...args: any[]) => ThunkAction2<R>;

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <TopMenu />
                <div className="row">
                    <div className="col col-lg-12">
                        <RouterContainer />
                    </div>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
