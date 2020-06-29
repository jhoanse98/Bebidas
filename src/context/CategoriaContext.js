import React, {createContext, useState} from 'react';


//Se crea el contexto
export const CategoriaContext =  createContext();


//Se crea la función  para el flujo de datos a los hijos
const CategoriasProvider = (props) => { //con props se hace referencia a los componentes hijos

    // crear el State del context
    const [hola, guardarHola] = useState('hola soy parte del context');

    return (
        <CategoriaContext.Provider
            value={{
                hola,
                guardarHola
            }}
        >
            {props.children} 
        </CategoriaContext.Provider>    
      );
}
 
/*value : Lo que esté en value serán los valores disponibles en los demas componentes. 
 hola y guardarHola estarán disponibles para todos los componentes
 */

 /*props: Se tiene que hacer referencia a los componentes hijos y eso se hace con props.children */
export default CategoriasProvider;