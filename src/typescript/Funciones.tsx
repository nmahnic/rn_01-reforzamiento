import React from 'react'

export const Funciones = () => {

    const sumar = ( a: number, b: number = 0) : number => {
        // return 'Hola Mundo';
        // return false;
        return a + b;
    }


    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado es: { sumar( 6 ) }</span>
            <br/>
            <span>El resultado es: { sumar( 6, 3 ) }</span>
        </>
    )
}
