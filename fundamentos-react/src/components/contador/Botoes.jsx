import React from "react";

export default (props) => {
    return(
        <div>
            {/* <button onClick={e => this.setState({valor: this.state.valor + this.state.passo})}>+</button>
            <button onClick={e => this.setState({valor: this.state.valor - this.state.passo})}>-</button> */}

            <button onClick={props.onIncremento}>+</button>
            <button onClick={props.onDecremento}>-</button>
        </div>
    );
}