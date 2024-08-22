import { combineReducers } from 'redux';

// aca importamos todos los reducers
import defaultReducer from "./default/defaultReducer";
import productReducer from "./product/productReducer";
import usuarioReducer from './login/loginReducer';
import objetoReducer from './objeto/objetoReducer';
import formReducer  from './form/formReducer';

const rootReducer = combineReducers({
    default: defaultReducer,
    product: productReducer,
    usuario: usuarioReducer,
    objeto: objetoReducer,
    form: formReducer,
});

export default rootReducer;