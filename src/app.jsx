import confetti from 'canvas-confetti'
import React, { useState } from "react";
import './style.css';
import { WinnerModal } from "./components/winnerModal";

export default  function App() {
  const [playerScore, setPlayerScore]= useState(0);
  const [pcScore, setPcScore]=useState(0);
  const [result, setResult]=useState("");
  const [winner, setWinner] = useState(null);
  
  console.log("Winner:", winner, );
  
  const playGame = (playerChoice)=>{
    if(playerScore === 3 || pcScore === 3){
      return console.log( "Fin de partida"); 
    }
    
    const options = ["Papel","Tijeras","Piedra"];
    const pcChoice = options[Math.floor(Math.random() * options.length)];
    const jugada = determineWinner(playerChoice.toLowerCase(), pcChoice.toLowerCase());

    if (jugada === "Empate") {
       setWinner("Empate");
      return;
     }
    
    if (jugada === "Jugador"){ 
      setPlayerScore((puntajeActual) => {
        const newScore = puntajeActual + 1;
        if(newScore === 3){
          setWinner("Jugador");
          confetti()
        }
        return newScore
      } );
        setResult(`Jugador elige ${playerChoice} \n PC elige ${pcChoice}`);
    } 
    else {
      setPcScore ((puntajeActual) => {
        const newScore = puntajeActual + 1;
        if (newScore === 3){
          setWinner("PC");
          confetti()
        }
        return newScore;
      } );
      setResult (`PC elige ${pcChoice} \n Jugador elige  ${playerChoice}`)
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
    setPlayerScore(0)
    setPcScore(0);
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
          <button onClick={() => playGame("Papel")} disabled={playerScore === 3 || pcScore === 3}>Papel 📃</button>
          <button onClick={() => playGame("Tijeras")} disabled={playerScore === 3 || pcScore === 3}>Tijeras ✂️</button>
          <button onClick={() => playGame("Piedra")} disabled={playerScore === 3 || pcScore === 3}>Piedra 🪨</button>

          <p className="result">{result}</p>

          <WinnerModal
          winner={winner}
          setWinner={setWinner}
          resetGame={resetGame}
          />
          {(playerScore === 3 || pcScore === 3)&&(
            <button onClick={resetGame}>Nuevo Juego</button>
          )}
      </main>
    );
}

  