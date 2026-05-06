import "./App.css";

function App() {
  const activo = false
  return (
    <div>
      <h2 className="titulo">Unahur</h2>
      <p className="parrafo">CIU</p>
      <button className={activo? "activo" : "inactivo"}>comprar</button>
    </div>
  )
}
export default App
