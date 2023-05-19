import { Component } from "react";

function EstadoAhijo (props) {

    return (<div>
        <h3>{props.contadorHijo}</h3>
    </div>
    );

}

export default class Estado extends Component {
    constructor (props){
        super(props);

        this.state={
            Title: "Estado",
            contador: 0
            

        }
        setInterval(()=>{
            this.setState({
                contador: this.state.contador+1
            })

        },1000)
        
    }
    render(){
        return(
        <div>
            <h1>{this.state.Title}</h1>
            <p>{this.state.contador}</p>
            <EstadoAhijo contadorHijo={this.state.contador}/>

        </div>
        
    )}

}