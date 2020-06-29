import React, {createContext,useState, useEffect} from 'react';
import axios from 'axios';

//creamos el contexto
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //guardar el ID que el usuario le da Click en listarecetas
    const [idreceta, guardarIdReceta] = useState(null);

    return (
        <ModalContext.Provider
            value={{
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
      );
}
 
export default ModalProvider;