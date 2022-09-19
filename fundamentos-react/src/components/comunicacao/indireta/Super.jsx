import React, { useState } from "react";

import Sub from "./Sub";

export default (props) => {

    const [num, setNum] = useState(0)
    const [label, setLabel] = useState('Valor')

    function quandoClicar(valor, label) {
        setNum(valor)
        setLabel(label)
    }

    return (
        <div>
            <h4>{label}: {num}</h4>
            <Sub quandoClicar={quandoClicar}></Sub>
        </div>
    );
}
    