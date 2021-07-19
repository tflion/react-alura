import './Formulario.css'

const Formulario = () => {
    return (
        <form className="form-cadastro">
            <h1>Gerenciador de Notas</h1>
            <input
                type="text"
                placeholder="Título"
                className="form-cadastro_input"
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

export default Formulario;