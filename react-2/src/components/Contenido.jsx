function Contenido({ nombre, cursada}) {
  return (
    <div>
        <h3>Hola {nombre}!</h3>
       {cursada && <h3>bienvenidx a la cursada de {cursada}</h3>}
        
        <footer>{navigator.userAgent}</footer>
    </div>
  )
}

export default Contenido