
import React from 'react'

// diferencias entre type, class, interface
interface Persona {
    nombre: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    pais: string,
    casaNo: number
}


export const ObjetosLiterales = () => {

    const nico: Persona = {
        nombre: 'Nicolas',
        edad: 27,
        direccion: {
            pais: 'Argentina',
            casaNo: 168
        }
    }

    // personas.nombreCompleto = 'Nicolas Mahnic';//ERROR

    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    { JSON.stringify(nico, null, 2) }
                </pre>
            </code>
        </>
    )
}
