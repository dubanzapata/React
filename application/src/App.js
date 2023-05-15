import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
function App() {
  let nombre="duban";
  let auth=false;
  let arreglo=["Primavera","Verano","Otoño"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre"/>
        <p>{auth?"el usuario esta logueado":"el usurio no esta logueado"}</p>
        <p>{2+1}</p>
        
        <ul>
          {arreglo.map((e,index)=>(
          <li key={index}>{e}</li>
        ))}</ul>

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
      </header>
      <section>
        <Componente msg="hola soy un componente de clase"/>
      </section>

    </div> 
  );
}

export default App;
