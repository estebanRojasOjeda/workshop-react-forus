import React from "react";

const InputTextoAsdf = (props) => {

    const actualizar = (e) => {
        console.log(e.target.value)
        props.setVariable(e.target.value)
    }

    return (
        <>
            <h1>Ingrese texto en input:</h1>
            <input type="text" onChange={actualizar} />
        </>
    )
}

export default InputTextoAsdf;