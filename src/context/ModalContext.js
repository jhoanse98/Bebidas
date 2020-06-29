import React, {createContext,useState, useEffect} from 'react';
import axios from 'axios';

//creamos el contexto
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //guardar el ID que el usuario le da Click en listarecetas
    const [idreceta, guardarIdReceta] = useState(null);
    
    //state para guardar la información de la receta seleccionada
    const [recetaseleccionada, guardarRecetaSeleccionada] = useState({});

    //cuando ya tengamos el id de una receta, consultamos la api

    useEffect(() => {
        const ConsultarIdBebida = async () => {
            if(!idreceta) return;
            const url =`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`

            const resultado = await axios.get(url);

            guardarRecetaSeleccionada(resultado.data.drinks[0]);
            
        }
        ConsultarIdBebida();
    }, [idreceta]);

    return (
        <ModalContext.Provider
            value={{
                recetaseleccionada,
                guardarIdReceta,
                guardarRecetaSeleccionada
            }}
        >
            {props.children}
        </ModalContext.Provider>
      );
}
 
export default ModalProvider;