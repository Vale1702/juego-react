import React, { useState } from "react";
// import React, { useState } from "react";
import './style.css';

export default  function App() {
  const [playerScore, setPlayerScore]= useState(0);
  const [pcScore, setPcScore]=useState(0);
  const [result, setResult]=useState("");
  const options = ["piedra", "papel", "tijeras"];

  const playGame= (playerChoice)=>{
    const pcChoice = options[Math.floor(Math.random() * options.length)];
    const winner = determineWinner(playerChoice, pcChoice);
  
    if (winner === "Jugador") {
      setPlayerScore(playerScore + 1);
      setResult(`Ganaste! ${playerChoice} vence a ${pcChoice}`);
    } else if (winner === "Computadora") {
      setPcScore(pcScore + 1);
      setResult(`Perdiste! ${pcChoice} vence a ${playerChoice}`);
    } else {
      setResult("Es un empate!");
    }
  };
  const determineWinner = (player, pc)=>{
    if(
      (player === "piedra" && pc === "tijera") ||
      (player === "Papel" && pc === "Piedra") ||
      (player === "Tijera" && pc === "Papel")
    ){
      return "Jugador";
    }
    return "PC";
  };

  return (
      <div className="game-container">
        <h1 className="game-title"> Game Piedra 🪨 Papel 📃 o Tijeras ✂️</h1>
        <div className="marcador">
            <div className="puntaje">
              <h2>Jugador{playerScore}</h2>
              <p id="jugador-puntos">0</p>
            </div>
            <div className="puntaje">
              <h2>PC{pcScore}</h2>
              <p id="pc-puntos">0</p>
            </div>
          <div/>
        </div>

        <div className="options-container">
          <h2> Elige tu Opcion </h2>
          {options.map((option)=>(
            <button
            key={option}
            onClick={()=> playGame(option)}
            style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
            >
              {option}
            </button>
          ))}
          <button className="option " id="piedra" > 
            <span>Piedra</span>
            </button>
          <button className="option " id="papel"> 
            <span>Papel</span>
            </button>
          <button className="option " id="tijeras"> 
            <span>Tijeras</span>
            </button>
        </div>

        <div className="res">
            <h2>{result}</h2>
        </div>
      </div>
    );
}

  