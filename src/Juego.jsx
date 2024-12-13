import React from 'react';
import './style.css';

function Juego() {
    return (
      <div className="juego-container">
        <h1 className='juego-title'>Juego Piedra 🪨 Papel 📃 o Tijeras ✂️</h1>
        <div className='marcador'>
        <p>Marcador</p>
        <div>
        <p>Jugador</p>
        <p>PC</p>
        </div>
        </div>
        <div className='btn-container'>
        <button className='button ' id="piedra">Piedra</button>
        <button className='button ' id="papel">Papel</button>
        <button className='button ' id="tijeras">Tijeras</button>
        </div>
        <div className='rest'>
            Resultados
        </div>
      </div>
    );
  }
  
  export default Juego;
  