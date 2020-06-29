import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//creamos el context
export const RecetasContext = createContext();

//siempre toma un props
const RecetasProvider = (props) => {

    //state para la busqueda de recetas
    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] =  useState({
        nombre: '',
        categoria: ''
    });
    //state para validar la consulta
    const [estadoconsulta, guardarEstadoConsulta] = useState(false);

    const {nombre, categoria} = busqueda;

    //consultamos las recetas en la API

    useEffect(() =>{
        if(estadoconsulta){
            const consultaRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
                
                const resultado = await axios.get(url)

                guardarRecetas(resultado.data.drinks);
            }
            consultaRecetas();
        }
        
    }, [busqueda]);

    return (
        <RecetasContext.Provider
            value={{
                buscarRecetas,
                guardarEstadoConsulta
            }}>
            {props.children}
        </RecetasContext.Provider>
      );
}
 
export default RecetasProvider;