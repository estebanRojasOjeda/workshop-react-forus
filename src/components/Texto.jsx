import React from "react";

const Texto = (props) => {
    return (
        <>
            <h2>Esto es DataBiding: </h2>
            <h3>{props.variable}</h3>
        </>
    )
}

export default Texto;