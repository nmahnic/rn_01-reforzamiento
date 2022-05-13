
import React from 'react'

export const TiposBasicos = () => {

    // let nombre: string | number = 'Fernando';
    // nombre = 123;

    const nombre: string  = 'Nicolas';
    const edad = 35;
    const estaActivo: boolean = false;

    
    // const poderes = ['Velocidad', 'Volar', 'Respirar en el agua'];
    // const poderes = []; //Error
    const poderes: string[] = [];

    return (
        <>
            <h3>Tipos Basicos</h3>
            { nombre } - { edad } - { (estaActivo) ? 'activo' : 'no activo'}
            <br/>
            Poderes: { poderes.join(', ')}
            <br/>
            
        </>
    )
}
