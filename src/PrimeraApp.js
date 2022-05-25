import React from "react"
import PropTypes from "prop-types"

const PrimeraApp = ({ saludo, subtitulo = "propiedad por defecto" }) => {

    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string,
    otra: PropTypes.number
}



export default PrimeraApp