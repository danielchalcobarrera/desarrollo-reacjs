import { SET_OBJETO } from './objetoTypes';

const initialState = {
    objeto: [],
};

const objetoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OBJETO : {
            return {
                ...state,
                objeto: action.payload,
            }
        }
        default:
            return state;
    }
};

export default objetoReducer;