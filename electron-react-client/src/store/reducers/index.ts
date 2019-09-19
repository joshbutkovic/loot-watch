import { combineReducers, Dispatch, Reducer } from 'redux';
import weatherReducer from './weatherReducer';
import errorReducer from './errorReducer';
import { ErrorState } from '../types';

//  * @template S Combined state object type.
//  *
//  * @param reducers An object whose values correspond to different reducer
//     * functions that need to be combined into one.One handy way to obtain it
//         * is to use ES6`import * as reducers` syntax.The reducers may never
//             *   return undefined for any action.Instead, they should return their
//                 * initial state if the state passed to them was undefined, and the current
//                     * state for any unrecognized action.
//  *
//  * @returns A reducer function that invokes every reducer inside the passed
//     * object, and builds a state object with the same shape.
//  * /
// export function combineReducers<S>(
//     reducers: ReducersMapObject<S, any>
// ): Reducer<S>
// export function combineReducers<S, A extends Action = AnyAction>(
//     reducers: ReducersMapObject<S, A>
// ): Reducer<S, A>
// The top-level state object
export interface ApplicationState {
    error: ErrorState;
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<
    ApplicationState
>({
    // @ts-ignore
    error: errorReducer,
});
