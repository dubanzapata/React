import { Component } from "react";
import data from "../helpers/data.json" 

function elementoLista(props){
    return (
        <li>
            <a href={props.el.web} target="_blank">{props.el.name}
            </a>
        </li>
    )
}
export default class RenderizadoElementos extends Component {

    constructor(props){
        super(props)

        this.state={
            estaciones:["Primavera","Verano","Otoño","Invierno"]

        }  

        

    }

    

    render(){
        
        

        return (
            <div>
                <h1>Renderizado de Elementos</h1>
                <h3>Estaciones</h3>
                <ol>
                    {this.state.estaciones.map((el)=>(
                    <li key={el}>{el}</li>
                ))}
                </ol>
                <h3>Frameworks Frontend javascript</h3 >
                <ul>
                {data.frameworks.map((el,index)=>(<elementoLista key={index} el={el}/>))}
                </ul>
                
            

            </div>
        )
    }
}