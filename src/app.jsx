import React, { useState } from "react";
// import React, { useState } from "react";
import './style.css';

export default  function App() {
  const [playerScore, setPlayerScore]= useState(0);
  const [pcScore, setPcScore]=useState(0);
  const [result, setResult]=useState("");
  const options = ["Papel","Tijeras","Piedra"];

  const playGame= (playerChoice)=>{
    //Eleccion aleatoria de PC
    const pcChoice = options[Math.floor(Math.random() * options.length)];
    //Ganador
    const winner = determineWinner(playerChoice, pcChoice);
    
    console.log(`Jugador elige ${playerChoice}`);
    console.log(`PC elige ${pcChoice}`);
    console.log(`Gano  ${winner}`);
    console.log(`______`);

    //Combate
    if (winner === "Jugador") {
      setPlayerScore(playerScore + 1);
      return setResult(`Jugador Gano!,  ${playerChoice} vence a ${pcChoice}`);
      
    } else if (winner === "PC") {
      setPcScore(pcScore + 1);
      return setResult(`Jugador perdio! ${pcChoice} vence a ${playerChoice}`);
      
    } else {
      return  ("Es un EMPATE");
    }
  };

  //Determinando Ganador 
  const determineWinner = (playerChoice, pcChoice) => {
    if(
      (playerChoice === "Piedra" && pcChoice === "Tijera") ||
      (playerChoice === "Papel" && pcChoice === "Piedra") ||
      (playerChoice === "Tijera" && pcChoice === "Papel")
    ) {
    return (`Jugador con :${playerChoice}`)
    }
    return (`PC con :${pcChoice}`)
  };

  return (
      <div className="game-container">
        <h1 className="game-title"> Game Piedra 🪨 Papel 📃 o Tijeras ✂️</h1>
        <div className="marcador">
            <div className="puntaje">
              <h2>Jugador {playerScore}</h2>
              <p id="jugador-puntos"></p>
            </div>
            <div className="puntaje">
              <h2>PC {pcScore}</h2>
              <p id="pc-puntos"></p>
            </div>
          <div/>
        </div>

        <div className="options-container">
          <h2> Elige tu Opcion </h2>
          {options.map((option)=>(
            <button
            key={option}
            onClick={()=> playGame(option)}
            className="option"
            >
              {option}
            </button>
          ))}
        </div>

        <div className="res">
            <h2> {result} </h2>
        </div>
      </div>
    );
}

  