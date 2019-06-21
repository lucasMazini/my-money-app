import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import AuthReducer from './auth';

export const rootReducers = combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
});