import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduccion a TS-REACT</h1>
      <hr/>
      <TiposBasicos/>
      <ObjetosLiterales/>
      <Funciones/>
    </div>
  )
}

export default App;
