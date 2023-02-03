import './App.css';
import { Login } from './components/Login/Login';
import { PreguntaRango } from './components/PreguntaRango/PreguntaRango';
import { PreguntaRespuesta } from './components/PreguntaRespuesta/PreguntaRespuesta';
import { NavbarPreguntas } from './components/NavbarPreguntas/NavbarPreguntas';

function App() {
  return (
    <div className="App">
      {/* <NavbarPreguntas /> */}
      <Login />
      {/* <PreguntaRango /> */}
      {/* <PreguntaRespuesta /> */}
    </div>
  );
}

export default App;
