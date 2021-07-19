import Formulario from "./Components/Formulario/Formulario";
import ListaDeNotas from "./Components/ListaDeNotas/ListaDeNotas";

import './Assets/App.css'

const App = () => {
  return (
    <section className="conteudo">
      <Formulario />
      <ListaDeNotas />
    </section>
  );
}

export default App;
