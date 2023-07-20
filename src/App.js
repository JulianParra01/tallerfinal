import React, {useEffect, useState} from 'react';
import './App.css';
import Characters from './components/Lista.js';
import Imagenes from './components/MostrarImg';
import {Login} from './components/Login';
import Detalles from './components/MasDetalles';
import {Home} from './components/Home';
function App() {

  const [characters, setCharacters] = useState([])
  const [user, setUser] = useState([])
const initialUrl = "https://rickandmortyapi.com/api/character";
  
  const fetchCharacters = (url) => {
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => setCharacters(data.results))
      .catch(err => console.log(err))  
};

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
      <nav>
        <h1>Taller 7</h1>
        <h3>Jonathan Parra</h3>
      </nav>
      

      <div className='container'>
        <Characters characters={characters} />


        <Imagenes characters={characters} />
        <Detalles characters={characters} />
      </div>
      
      <div className='loginpage'>
        {
          !user.length > 0
            ? <Login setUser={setUser} />
            : <Home user={user} setUser={setUser} />
        }

      </div>

    </>
  );
  
}

export default App;
