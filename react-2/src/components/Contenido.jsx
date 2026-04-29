import { useState } from "react"

function Contenido({ nombre = "Juan", cursada, activado}) {
    const [name, setName] = useState(nombre)
    const [contador,setContador] = useState(0);
    const incrementarContador = () => setContador(contador + 1)
    const resetearContador = () => setContador(0)

    const cambiarNombre = () => {
        setName("Juana")
    }

    function saludar(evento) {
        setName(evento.target.value)
    }

    return (
        <div>
            <h3>Hola {name}!</h3>
            <h3>{activado && cursada ? "bienvenidx a la cursada de" + cursada : "En construcción"}</h3>
            <div>
                <input onChange={saludar} type="text" />
                <button onClick={cambiarNombre}>Cambiar nombre</button>
            </div>
            <p>clicks: {contador}</p>
            <button onClick={incrementarContador}>+1</button> <button onClick={resetearContador}>reiniciar</button>
            <footer>{navigator.userAgent}</footer>
        </div>
    )
}

export default Contenido