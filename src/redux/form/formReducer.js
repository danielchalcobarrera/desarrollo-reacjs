import { SET_FORM_DATA, RESET_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password:'',
    },
    passwordValidator: 'mod7ReactUSIP',
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            if (state.passwordValidator==action.payload.password) {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                },
            }
          }
        }
        case RESET_FORM_DATA:{
            return {
                ...state,
                formData: {
                    username: '',
                    email: '',
                    password: '',
                },
            }
        }

        default:
            return state;
    }
};

export default formReducer;