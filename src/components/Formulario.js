import React, {useContext} from 'react';
import {CategoriaContext} from '../context/CategoriaContext';

const Formulario = () => {

  const {categorias} = useContext(CategoriaContext);


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
            />
          </div>
          <div className="col-md-4">
            <select
             className="form-control" 
             name="categoria"
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