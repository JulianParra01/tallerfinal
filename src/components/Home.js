export function Home({user, setUser}){ 
    const desloguepa = () => {
        setUser([])
    }
    return(
     <div>
        <h1>BIENVENIDO</h1>
        <h2>{user}</h2>
        <button onClick={desloguepa}>Cerrar Sesion</button>
     </div>
    )   
}
