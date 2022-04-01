import React, { useState } from "react";
import InputTextoAsdf from "./InputTexto";
import Texto from "./Texto";
import "./style/layout.css";

const Layaout = () => {

    const [variable, setVariable] = useState('');

    return (
        <>
            <div className="header">header</div>
            <div className="main">
                <div className="menu">menu</div>
                <div className="container">
                    <InputTextoAsdf variable={variable} setVariable={setVariable}></InputTextoAsdf>
                    <br></br>
                    <Texto variable={variable}></Texto>
                </div>
            </div>
        </>
    )
}

export default Layaout;