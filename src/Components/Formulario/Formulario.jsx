import React, { Component } from 'react';
import './Formulario.css'

class Formulario extends Component {

    constructor(){
        super();
        this.titulo = "";
    }
    handleMudancaTitulo(evento){
        this.titulo = (evento.target.value)
        console.log(this.titulo)
    }


    render() {
        return (
            <form className="form-cadastro">
                <h1>Gerenciador de Notas</h1>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this.handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                />
                <button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
            </form>
        );
    }
}

export default Formulario;