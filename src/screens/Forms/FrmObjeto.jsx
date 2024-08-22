
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {setObjeto} from '../../redux/objeto/objetoActions'

const FrmObjeto = () => {
    const objetoState = useSelector (state => state.objeto);
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(
        setObjeto(
            [{ id: "0001", descripcion: " cero cero cero uno" }])
       )
    },[]);

    return (
        <div>
            <h1>Componente Bienvenido*************** </h1>
            <h4>{JSON.stringify(objetoState.objeto)}</h4>
        </div>
         
    );
}

export default FrmObjeto