import './Login.css';
import { useState } from "react";


export function Login({setUser}) {
    const [nombre, setNombre] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (evento) => {
        evento.preventDefault()

        if (nombre == "" ||  password == ""){
            setError(true)
            return
        }
        setError(false)

        setUser([nombre])
    }   

    return (

        <section>
            <h1>Login</h1>

            <form className="formulario" onSubmit={handleSubmit}> 
                <input type='text' value={nombre} onChange={evento=>setNombre(evento.target.value)} />
                <input type='password' value={password} onChange={evento2=>setPassword(evento2.target.value)} />
                <button>Registrarse</button>
            </form>
            {error && <p>* Todos los campos son obligatorio *</p> }
        </section>
    )
}
