import React, {useContext, useState} from 'react';
import {CategoriaContext} from '../context/CategoriaContext';

const Formulario = () => {


  //acceder a las categorias del context
  const {categorias} = useContext(CategoriaContext);

  //state para que guardar las busquedas del usuario
  const [ busqueda, actualizarBusqueda] = useState({
    nombre: '',
    categoria: ''
  });

  //obtener los resultados de la búsqueda 
  const obtenerBusqueda = e => {
    actualizarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    });

  }
    return (
      <form
        className="col-12"
      >
        <fieldset className="text-center">
          <legend>Busca bebidas por Categoría o Ingrediente</legend>
        </fieldset>

        <div className="row mt-4">
          <div className="col-md-4">
            <input
              name="nombre"
              className="form-control"
              type="text"
              placeholder="Buscar por ingrediente"
              onChange={obtenerBusqueda}
            />
          </div>
          <div className="col-md-4">
            <select
             className="form-control" 
             name="categoria"
             onChange={obtenerBusqueda}
            >
              <option value="">--Seleccionar--</option>
              {categorias.map(categoria => (
                <option 
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >{categoria.strCategory}</option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <input
              type="submit"
              className="btn btn-block btn-primary"
              value="Buscar bebidas"
            />
          </div>
        </div>

      </form>
        
      );
}
 
export default Formulario;