import { SET_USUARIO } from './loginTypes';

export const setUsuario = (usuario) => {
    return {
        type: SET_USUARIO,
        payload: usuario,
    }
}
