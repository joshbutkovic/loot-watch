import { LOGIN_USER } from '../actions/types';

const initialState = {
    auth: {},
};

export default function(state = initialState, action: any) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                auth: action.payload,
            };
        // case GET_CURRENT_WEATHER_BY_CITY:
        //     return {
        //         ...state,
        //         currentWeather: action.payload,
        //     };
        // case CLEAR_WEATHER:
        //     return {
        //         ...state,
        //         currentWeather: action.payload,
        //         forecast: [],
        //     };
        // case GET_FORECAST_BY_ZIP:
        //     return {
        //         ...state,
        //         forecast: action.payload,
        //     };
        // case GET_FORECAST_BY_CITY:
        //     return {
        //         ...state,
        //         forecast: action.payload,
        //     };
        default:
            return state;
    }
}
