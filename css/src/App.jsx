import { useState } from "react"

function App() {

  const modoOscuro = false

  const titulo = {
    color: cambiar ? "blue" : "red",
    fontSize: "64px",
    textAlign: "center",
    textDecoration: "underline",
    textDecorationColor: "red"
  }

  const parrafo = {
    color: "green",
    textAlign: "center",
    fontSize: "32px"
  }

  return (
    <div>
      <h2 style={titulo}>Unahur</h2>
      <p>{cambiar}</p>
      <p style={parrafo}>CIU</p>
      <button onClick={cambiarColor}></button>
    </div>
  )
}

function cambiarColor() {
  setCambiar(!cambiar)
}

export default App
