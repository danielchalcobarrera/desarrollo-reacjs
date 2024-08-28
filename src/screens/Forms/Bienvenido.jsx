import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';




import {setUsuario} from '../../redux/login/loginActions'
const Bienvenido = () => {
    const usuarioState = useSelector (state => state.usuario);
    const formState = useSelector(state=>state.form);
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(
        setUsuario("daniel.chalco")
       )
    },[]);

    return (
        <div>
            <h1>Componente Bienvenido*************** </h1>
            <h4>{usuarioState.usuario}</h4>
            <p>------------------------------------</p>
            <h3>{formState.formData.username}</h3>  
            <h3>{formState.passwordValidator}</h3>  
                    
        </div>
         
    );
}

export default Bienvenido