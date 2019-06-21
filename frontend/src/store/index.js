import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from '../reducers';

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import multi from 'redux-multi';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const Store = applyMiddleware(multi, thunk, promise)(createStore)(rootReducers, devTools);