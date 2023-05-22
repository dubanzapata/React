import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
function App() {
  
  return (
    <div className="App">

      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />

<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
        </section>

        <section>
        <Componente msg="hola soy un componente funcional declarativo"/>
        <hr/>
        <Propiedades cadena="esto es una cadena de texto" numero={10} booleano={true} 
        arreglo={[1,2,3]}  objeto={{nombre:"duban",edad:34,estudiante:true}}
        elementoReact={<li>"elemento JSX" </li>} funcion={(num)=>num*num}
        componenteReact={<Componente msg="componente mediante una props"/>}/>
      </section>
      <hr/>
      <Estado></Estado>  
      <hr/>
      <RenderizadoCondicional></RenderizadoCondicional>
      </header>
    </div> 
  );
}

export default App;
