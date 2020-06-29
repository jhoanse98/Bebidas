import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';


//Se crea el contexto
export const CategoriaContext =  createContext();


//Se crea la función  para el flujo de datos a los hijos
const CategoriasProvider = (props) => { //con props se hace referencia a los componentes hijos

    // crear el State del context
    const [categorias, guardarCategorias] = useState([]);

    //consultamos la API para sacar categorias
    useEffect(()=>{
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await axios.get(url);
            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    },[]);

    return (
        <CategoriaContext.Provider
            value={{
                categorias
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