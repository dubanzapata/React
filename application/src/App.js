import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
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
        <Componente msg="hola soy un componente funcional expresado"/>
        <hr/>
        <Propiedades cadena="esto es una cadena de texto" numero={10} booleano={true} 
        arreglo={[1,2,3]}  objeto={{nombre:"duban",edad:34,estudiante:true}}
        elementoReact={<li>"elemento JSX" </li>} funcion={(num)=>num*num}
        componenteReact={<Componente msg="componente mediante una props"/>}/>
      </section>  
     
      </header>
    </div> 
  );
}

export default App;
