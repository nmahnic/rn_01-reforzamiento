// import { Funciones } from "./typescript/Funciones";
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
// import { TiposBasicos } from "./typescript/TiposBasicos";
import { Contador } from './Components/Contador';
import { ContadorConHook } from './Components/ContadorConHook';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS-REACT</h1>
      <hr/>
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/> */}
      <Contador/>
      <ContadorConHook/>
    </div>
  )
}

export default App;
