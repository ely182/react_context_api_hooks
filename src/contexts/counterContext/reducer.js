import { initialState } from '.';
import * as actionTypes from './actionTypes';

export const reducer = (state, action) => {
    switch (action.type){
        case actionTypes: return {...state, counter: state.counter + 1};
            case actionTypes: return {...state, counter: state.counter + 1};
                case actionTypes: return {...initialState};
                    case actionTypes: return {...state, ...action.payload};
                        case actionTypes: return {...state, loading:true};
                            case actionTypes: return {...state, loading: false, counter:state.counter +1};
                                case actionTypes: return {...state, loading: false};
    }
    
    return state;
};