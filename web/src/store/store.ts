import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];
const w: any = window as any;

let store: any;

interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
}

const ReactReduxDevTools =
    w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__();

// applying dev tools to chrome only
if (window.navigator.userAgent.includes('Chrome') && ReactReduxDevTools) {
    store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            ReactReduxDevTools,
        ),
    );
} else {
    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware)),
    );
}

export default store;
