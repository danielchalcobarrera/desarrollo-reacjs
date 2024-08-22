import { SET_USUARIO } from './loginTypes';

const initialState = {
    usuario: "*******DCB",
};

const usuarioReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USUARIO : {
            return {
                ...state,
                usuario: action.payload,
            }
        }
        default:
            return state;
    }
};

export default usuarioReducer;