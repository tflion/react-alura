import Formulario from "./Components/Formulario";
import ListaDeNotas from "./Components/ListaDeNotas";

import './Assets/App.css'
import './Assets/index.css';
import { Component } from "react";

class App extends Component {
  

  constructor(){
    super();

    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo,texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {


    return (
      <section className="conteudo">
        <Formulario criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
