import { Component } from "react";

function Login(props){

    return  (
        <div>
            <h3>Login</h3>
        </div>
    )

}

function Loguot(props){

    return  (
        <div>
            <h3>Loguot</h3>
        </div>
    )

}

export default class RenderizadoCondicional extends Component{
    constructor (props){

        super(props);

        this.state={

            session: false
        }

    }

    render(){

        return(
            <di>
                <h1>RenderizadoCondicional</h1>
                {this.state.session?<Login/>:<Loguot/>}
            </di>
        )
    }

}