import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';




import {setUsuario} from '../../redux/login/loginActions'
const Bienvenido = () => {
    const usuarioState = useSelector (state => state.usuario);
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
        </div>
         
    );
}

export default Bienvenido