import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoRecetas from './components/ListaRecetas';
import CategoriasProvider from './context/CategoriaContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';


function App() {
  //CategoriasProvider encaja todos los componentes con el contexto para
  //que estos tengan a disposición los valores dentro value 
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>

            <Header />

            <div className="container mt-5">
                <div className="row">
                    <Formulario />
                </div>
                
                <ListadoRecetas />
            </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
    
  );
}

export default App;
