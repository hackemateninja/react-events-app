import React, {Fragment} from 'react';
import Header from "./components/Header";
import CategoriasProvider from "./context/CategoriasContext";
import EventosProvider from "./context/EventosContext";
import Formulario from "./components/Formulario";
import Eventos from "./components/Eventos";

function App() {
  return (
      <Fragment>
          <Header/>
          <EventosProvider>
              <CategoriasProvider>
                  <div className="uk-container">
                      <Formulario/>
                      <Eventos/>
                  </div>
              </CategoriasProvider>
          </EventosProvider>
      </Fragment>
  );
}

export default App;
