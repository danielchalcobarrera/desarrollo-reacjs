import React from 'react'
import logo from '../../logo.svg';
const LandingPage = () => {
  return (
    <>
    <header>
       {/**
       <img src={logo} className="App-logo" alt="logo"/>
        */} 
       <h1>Módulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
       <h4>Alumno: Juan Daniel Chalco Barrera    CI: 3381395</h4>  
    </header>
    <section>
        <article>
            <h2>Bienvenido</h2>
            <p>Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.</p>
        </article>
        <article>
            <h2>Temas Cubiertos</h2>
           <table width='80%' >
             <tr> 
               <td>Componentes funcionales y de clase</td>  
               <td>Uso de <strong>React hooks</strong> como useState y useEffect</td>  
               <td>Creación de <strong>custom hooks</strong> como useForm</td>
               <td>Gestión de variables de estado con useState</td>
               <td>Gestión de estado global con <strong>Redux</strong></td>
               <td>Integración de <strong>Redux</strong> con <strong>React</strong></td>
               <td>Manejo de <strong>Formularios</strong> en <strong>React</strong></td>
               <td>Publicando nuestra <strong>Página</strong> con <strong>GitHub Pages</strong></td>
             </tr> 
           </table>
        </article>
        <article>
            <h2>Recursos Adicionales</h2>
            <p>Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>, el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.</p>
            <p><a href="https://es.react.dev" >- React JS</a></p>
            <p><a href="https://es.redux.js.org">- Redux</a></p>
            <p><a href="https://es.redux.js.org">- Hook</a></p>
        </article>
    </section>
    <footer>
        <p>@ 2024 Modulo 7 USIP</p>
    </footer>
    </>
  )
}

export default LandingPage