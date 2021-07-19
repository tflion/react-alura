import Formulario from "./Components/Formulario";
import ListaDeNotas from "./Components/ListaDeNotas";

import './Assets/App.css'
import './Assets/index.css';
import { Component } from "react";

class App extends Component {
  

  criarNota(titulo, texto){
    console.log(`Uma nova nota foi criada:` + titulo + ` ` + texto)
  }

  render() {


    return (
      <section className="conteudo">
        <Formulario criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
