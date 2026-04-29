import Header from './Header.jsx'

function App() {
  const nombre = "Raul"
  var count = 0
  const persona = {
    nombre: "Juan",
    edad: 20
  }
  const increase = () => {count += 1}
  return <>
    <Header/>
    <Tarjeta nombre="Juan"/>
    <Tarjeta nombre="Raul"/>
    <button onClick={increase}>{count}</button>
    
  </>
}

function Tarjeta(props) {
  return <p>Hola {props.nombre}</p>
}

export default App