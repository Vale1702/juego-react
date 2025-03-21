import confetti from 'canvas-confetti'
import React, { useState } from "react";
import './style.css';
import { WinnerModal } from "./winnerModal";

export default  function App() {
  const [playerScore, setPlayerScore]= useState(0);
  const [pcScore, setPcScore]=useState(0);
  const [result, setResult]=useState("");
  const [winner, setWinner] = useState(null);
  const options = ["Papel","Tijeras","Piedra"];

console.log("Winner:", winner, );

  const playGame = (playerChoice)=>{
    const pcChoice = options[Math.floor(Math.random() * options.length)];

    const jugada = determineWinner(playerChoice.toLowerCase(), pcChoice.toLowerCase());

   if (jugada === "Empate") {
      setWinner("Empate");
     return;
    } 
    
    if (jugada === "Jugador"){ 
      setPlayerScore(puntajeActual => puntajeActual + 1)
      setResult(`Jugador elige ${playerChoice} vence a ${pcChoice}`);
      confetti()
      setWinner(false);
    } 
    else {
      setPcScore (puntajeActual => puntajeActual + 1);
      setResult (`PC elige ${pcChoice}, vence a ${playerChoice}`)
      confetti()
      setWinner(true);
        }
  };

  const determineWinner = (playerChoice, pcChoice) => {

    const jugada = {
      piedra: "tijeras",
      papel: "piedra",
      tijeras: "papel"
    };

    if(playerChoice === pcChoice ){
      return "Empate";
    }
    return jugada[playerChoice] === pcChoice ? "Jugador" : "PC";
  };

  //Reiniciar Juego
  const resetGame = () =>{
    setResult(null)
    setWinner(null);
  }

  return (
      <main className="game-container">
        <h1> Game Piedra 🪨 Papel 📃 o Tijeras ✂️</h1>

        <div className="score-container">
              <span>Jugador: {playerScore}</span>
              <span>PC: {pcScore}</span>
          <div/>
        </div>

          <h2> Elige tu Opcion </h2>
          <button onClick={() => playGame("Papel")}>Papel 📃</button>
          <button onClick={() => playGame("Tijeras")}>Tijeras ✂️</button>
          <button onClick={() => playGame("Piedra")}>Piedra 🪨</button>

          <p className="result">{result}</p>

          <WinnerModal
          resetGame={resetGame}
          winner={winner}/>
      </main>
    );
}

  