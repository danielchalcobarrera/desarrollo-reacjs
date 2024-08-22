import { SET_OBJETO } from './objetoTypes';

export const setObjeto = (objeto) => {
    return {
        type: SET_OBJETO,
        payload: objeto,
    }
}
