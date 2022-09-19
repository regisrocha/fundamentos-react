import React, { Component } from "react";

import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

export default class Contador extends Component {

    constructor(props) {
        super(props)
        this.state = {
            passo: props.passo || 1,
            valor: props.valorInicial || 0
        }
    }

    mudarPasso = (novoPasso) => {
        this.setState({passo: novoPasso})
    }

    incremento = () => {
        this.setState({valor: this.state.valor + this.state.passo})
    }

    decremento = () => {
        this.setState({valor: this.state.valor - this.state.passo})
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                {/* <h4>Passo: { this.state.passo }</h4> */}
                {/* <h4>Valor: { this.state.valor }</h4> */}

                <PassoForm passo={this.state.passo} onPassoChange={this.mudarPasso}/>
                <Display valor={this.state.valor}/>

                <Botoes onDecremento={this.decremento} onIncremento={this.incremento}/>

            </div>
        )
    }
}