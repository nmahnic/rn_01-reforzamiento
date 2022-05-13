import { useState } from 'react'

export const useCounter = ( init: number = 0) => {
  
    const [valor, setValor] = useState(init)

    const acumular = ( numero: number) => { setValor(valor+numero); }

    return { valor, acumular }

}
