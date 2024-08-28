import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {resetFormData, saveFormData} from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import ModalOut from "../../components/ModalOut";

import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm( {username: '', email: '',password:''});
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const [showModalOut, setShowModalOut] = useState(false);
    const [message, setMessage] = useState('');

    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(values);
      console.log(values.password);
      if (values.password === form.passwordValidator) {
        dispatch(saveFormData(values));
        setMessage( "Welcome to the system");
        showModal();
      } else {
        //alert('Password incorrecto')
        setMessage("Incorrect password");
        showModal();
      }
    };

    const hideModalInfo = () => {
        setShowModalInfo(false);
    };
    const hideModalOut = () => {
        setShowModalOut(false);
    };
    const handleOutSession = () =>{

       //alert('Cerrar sesion **************')
       //****************************** */
          dispatch(resetFormData());

       setShowModalOut(false);
       resetForm(event);

    }

    const showModal = () => {
        setShowModalInfo(true);
    }
    const switchShowPassword = () => 
        setShowPassword(!showPassword);

     const handleLogout = () => {
        setShowModalOut(true);
     }
  


    return (
          <>
            <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalInfo
                visible={showModalInfo}
                message={message}
                onClose={hideModalInfo}
                typeNotification='notification-alert'
            />
            
            <ModalOut
                visible={showModalOut}
                message="Esta seguro de que quiere cerrar session?"
                onClose={hideModalOut}
                onOut={handleOutSession}
            />  

           
            <div className="container">
                <form onSubmit={handleSubmit}>
                   {/** 
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    <h5>password: {form.formData.password}</h5>
                   */}
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword?'text':'password'}
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <button type="button"  onClick={switchShowPassword}>{showPassword ? 'Ocultar' : 'Mostrar'}</button>
                    </div>
                   
                    <div className="button-container">
                        <button type="submit">Submit</button>&nbsp;&nbsp;
                        <Link onClick={handleLogout} className="link-logout">Logout</Link>
                         {/** 
                        <button onClick={showModal}>Mostrar Modal</button>
                        */}
                    </div>
                    
                </form>
            </div>
            </motion.div>
            </>    
       
    );
};

export default LoginForm;