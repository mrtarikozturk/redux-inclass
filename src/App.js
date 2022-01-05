import React from 'react';
import AppRouter from './router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider as StoreProvider } from 'react-redux';

const initialState = {
    loading: false,
    token: '',
    error: [],
    language: 'en',
    userList: [],
    selectedUser: {},
    newsList: [],
    selectedNews: {},
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_LOADING_FALSE':
            return {
                ...state,
                loading: false,
            }
        case 'SET_LOADING_TRUE':
            return {
                ...state,
                loading: true,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: payload,
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: payload,
            };
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: payload,
            };
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: [],
            };
        case 'SET_USER_LIST':
            return {
                ...state,
                userList: payload,
            };
        case 'SET_SELECTED_USER':
            return {
                ...state,
                selectedUser: payload,
            };
        case 'SET_NEWS_LIST':
            return {
                ...state,
                newsList: payload,
            };
        case 'SET_SELECTED_NEWS':
            return {
                ...state,
                selectedNews: payload,
            };
        default:
            return state;
    }
}

// const store = createStore(rootReducer);

let store;

if (process.env.NODE_ENV === 'development') {
    // store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
} else {
    // store = createStore(rootReducer);
    store = createStore(rootReducer, applyMiddleware(thunk));
}


/**
    store.subscribe(() => {
        console.log(store.getState());
    })
    
    store.dispatch({ type: 'SET_LOADING_FALSE' });
    
    store.dispatch({ type: 'SET_TOKEN', payload: 'advasdjvhbasdjvasd' })
*/

const App = () => {
    return (
        <StoreProvider store={store}>
            <AppRouter />
        </StoreProvider>
    )
}

export default App
