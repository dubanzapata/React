import { Component } from "react";

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

        </div>
        
    )}

}