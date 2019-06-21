import { USER_FETCHED, TOKEN_VALIDATED } from './actionTypes';
import { toastr } from 'react-redux-toastr';
import axios from 'axios';
import consts from '../consts';

export function login(values) {
    return submit(values, `${consts.OAPI_URL}/login`);
};

export function signup(values) {
    return submit(values, `${consts.OAPI_URL}/signup`);
};

export function logout() {
    return { type: TOKEN_VALIDATED, payload: false };
};
// nesta função, não consta o returno do dispatch
function submit(values, url) {
    console.log('até aqui')
    return dispatch => {
        console.log('aqui já não vai')
        axios.post(url, values)
        .then(resp => {
            dispatch([
                { type: USER_FETCHED, payload: resp.data }
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach(
                error => toastr.error('Erro', error)
            )
        })
    };
};

export function validateToken(token) {
    return dispatch => {
        if(token) {
            axios.post(`${consts.OAPI_URL}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid });
                })
                .catch(e => dispatch({ type: TOKEN_VALIDATED, payload: false }));
        } else {
            dispatch({ type: TOKEN_VALIDATED, payload: false });
        };
    };
};
