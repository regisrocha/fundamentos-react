import React from "react";

export default (props) => {
    return (
        
        // <div>
        //     <button onClick={props.quandoClicar}>Alterar</button>
        // </div>
        
        <div>
            <button onClick={() => {props.quandoClicar(Math.random(), 'Valor alterado')}

            }>Alterar</button>
        </div>
        
    );
}
    