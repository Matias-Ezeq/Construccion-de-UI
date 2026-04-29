import Contenido from "./components/Contenido"
import Header from "./components/Header"

function App(){
  return <>
    <Header/>
    <Contenido nombre="Raul" cursada="CIU"/>
    <Contenido nombre="Pancho"/>
    <Contenido nombre="" cursada="CIU"/>
  </>
}

export default App 