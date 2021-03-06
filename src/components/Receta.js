import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from "prop-types";

//funcion para algunos posicionamientos
function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      
    };
}

//algunos estilos css con makeStyles de material UI
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 300,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Receta = ({receta}) => {

    const {recetaseleccionada, guardarIdReceta, guardarRecetaSeleccionada} = useContext(ModalContext);

    
    //Configuramos unas cosas para el modal

    const [modalStyle] = useState(getModalStyle); //un state que contenga los estilos del modal 
    const [open, setOpen] = useState(false); //un state para cuando abran o cierren el modal

    const classes = useStyles(); //state para que guarde en classes los estilos que creamos en useStyles
    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      //Función que accede a los ingredientes y cantidades

    const mostrarIngredientes = recetaseleccionada => {
        let ingredientes = [];
        for(let i=1; i<16; i++){
            if(recetaseleccionada[`strIngredient${i}`]){
                ingredientes.push(
                    <li key={i}>{recetaseleccionada[`strIngredient${i}`]} {recetaseleccionada[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredientes;
    
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img  className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={()=> {
                            guardarIdReceta(receta.idDrink)
                            handleOpen();
                        }}
                    >
                        Ver receta
                    </button>

                    <Modal
                        open={open}
                        onClose = { () => {
                            guardarIdReceta(null);
                            guardarRecetaSeleccionada({});
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recetaseleccionada.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                               {recetaseleccionada.strInstructions} 
                            </p>
                            <img className="img-fluid my-4" src={recetaseleccionada.strDrinkThumb}  alt="imagen de la receta seleccionada"/>

                            <h3 className="mt-4">Ingredientes y Cantidades</h3>
                            <ul>
                                {mostrarIngredientes(recetaseleccionada)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
      );
}

Receta.propTypes = {
    receta: PropTypes.object.isRequired,
}
 
export default Receta;