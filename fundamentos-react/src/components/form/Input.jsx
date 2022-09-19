import React, {useState} from "react";

export default (props) => {
    const [nome, setNome] = useState()

    return (
        <>
            <p>Nome: {nome}</p>
            <input type="text" onChange={(e) => setNome(e.target.value)} value={nome}/>
        </>
    );
}