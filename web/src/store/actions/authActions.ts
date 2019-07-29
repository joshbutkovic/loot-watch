import axios from 'axios';
import { LOGIN_USER } from './types';
import { Dispatch } from 'react';

export const loginUser = (data: any, history: any) => async (dispatch: any) => {
    try {
        const res = await axios.post('http://localhost:5000/auth/login', data);
        console.log(res);
        // dispatch({
        //     type: LOGIN_USER,
        //     payload: res.data,
        // });
        // console.log('Inside try');
        // history.push('/');
    } catch (error) {
        console.log('Inside catch' + error);
        // dispatch({
        //     type: SET_ERROR,
        //     payload: 'No location found for that zip',
        // });
        // history.push('/');
    }
};

// export const setError = error => async dispatch => {
//     dispatch({
//         type: SET_ERROR,
//         payload: error,
//     });
// };

// export const clearError = () => async dispatch => {
//     dispatch({
//         type: CLEAR_ERROR,
//         payload: {},
//     });
// };
