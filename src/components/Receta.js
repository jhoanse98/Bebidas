import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

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
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({receta}) => {

    const {guardarIdReceta} = useContext(ModalContext);

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
                            handleClose()
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h1>Desde Modal</h1>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
      );
}
 
export default Receta;