import Formulario from "./Components/Formulario";
import ListaDeNotas from "./Components/ListaDeNotas";

import './Assets/App.css'
import './Assets/index.css';

const App = () => {
  return (
    <section className="conteudo">
      <Formulario />
      <ListaDeNotas />
    </section>
  );
}

export default App;
