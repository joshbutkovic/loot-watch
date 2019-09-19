// import axios from 'axios';
import { SET_ERROR, CLEAR_ERROR } from './types';

export const setError = error => async dispatch => {
    dispatch({
        type: SET_ERROR,
        payload: error,
    });
};

export const clearError = () => async dispatch => {
    dispatch({
        type: CLEAR_ERROR,
        payload: {},
    });
};

// import {
//     getCurrentWeatherByCityUrl,
//     getCurrentWeatherByZipUrl,
//     getForecastByCityUrl,
//     getForecastByZipUrl,
// } from '../../config/apiConfig';

// export const getCurrentWeatherByZip = (zip, history) => async dispatch => {
//     try {
//         const res = await axios.get(getCurrentWeatherByZipUrl(zip));
//         dispatch({
//             type: GET_CURRENT_WEATHER_BY_ZIP,
//             payload: res.data,
//         });
//         history.push('/current');
//     } catch (error) {
//         dispatch({
//             type: SET_ERROR,
//             payload: 'No location found for that zip',
//         });
//         history.push('/');
//     }
// };

// export const getCurrentWeatherByCity = (city, history) => async dispatch => {
//     try {
//         const res = await axios.get(getCurrentWeatherByCityUrl(city));
//         dispatch({
//             type: GET_CURRENT_WEATHER_BY_CITY,
//             payload: res.data,
//         });
//         history.push('/current');
//     } catch (error) {
//         dispatch({
//             type: SET_ERROR,
//             payload: 'No location found for that city',
//         });
//         history.push('/');
//     }
// };

// export const clearWeather = () => async dispatch => {
//     dispatch({
//         type: CLEAR_WEATHER,
//         payload: {},
//     });
// };

// export const getForecastByZip = (zip, history) => async dispatch => {
//     try {
//         const res = await axios.get(getForecastByZipUrl(zip));
//         dispatch({
//             type: GET_FORECAST_BY_ZIP,
//             payload: res.data,
//         });
//         history.push('/forecast');
//     } catch (error) {
//         dispatch({
//             type: SET_ERROR,
//             payload: 'No location found for that zip',
//         });
//         history.push('/');
//     }
// };

// export const getForecastByCity = (city, history) => async dispatch => {
//     try {
//         const res = await axios.get(getForecastByCityUrl(city));
//         dispatch({
//             type: GET_FORECAST_BY_CITY,
//             payload: res.data,
//         });
//         history.push('/forecast');
//     } catch (error) {
//         dispatch({
//             type: SET_ERROR,
//             payload: 'No location found for that city',
//         });
//         history.push('/');
//     }
// };
