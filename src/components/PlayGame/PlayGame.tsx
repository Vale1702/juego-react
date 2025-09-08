import { useState } from "react";
import confetti from 'canvas-confetti'
import '../../style.css'

export const options = ["Piedra", "Papel", "Tijeras"] as const;

const usePlayGame = () => {
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [winner, setWinner] = useState("");
  const [pcChoice, setPcChoice] = useState<typeof options[number] | null>(null);

  const determineWinner = (playerChoice: typeof options[number], pcChoice: typeof options[number]) => {
    if (playerChoice === pcChoice) {
      return "Empate";
    }
    
    // Piedra vence a Tijeras
    if (playerChoice === "Piedra" && pcChoice === "Tijeras") {
      return "Jugador";
    }
    
    // Papel vence a Piedra
    if (playerChoice === "Papel" && pcChoice === "Piedra") {
      return "Jugador";
    }
    
    // Tijeras vencen a Papel
    if (playerChoice === "Tijeras" && pcChoice === "Papel") {
      return "Jugador";
    }
    
    // Si no es empate ni gana el jugador, gana la PC
    return "PC";
  };

  const playGame = (playerChoice: typeof options[number]) => {
    // Generar elección de la PC
    const newPcChoice = options[Math.floor(Math.random() * options.length)] as typeof options[number];
    setPcChoice(newPcChoice);
    
    // Determinar ganador
    const jugada = determineWinner(playerChoice, newPcChoice);
    
    if (jugada === "Empate") {
      setResult(`Empate: Jugador elige ${playerChoice}, PC elige ${newPcChoice}`);
      return;
    }

    if (jugada === "Jugador") {
      setPlayerScore((prev) => {
        const newScore = prev + 1;
        if (newScore === 3) {
          setWinner("Jugador");
        }
        return newScore;
      });
      setResult(`¡Ganaste! Jugador elige ${playerChoice}, PC elige ${newPcChoice}`);
    } else {
      setPcScore((prev) => {
        const newScore = prev + 1;
        if (newScore === 3) {
          setWinner("PC");
        }
        return newScore;
      });
      setResult(`¡Perdiste! PC elige ${newPcChoice}, Jugador elige ${playerChoice}`);
    };
  }

  const resetGame = () => {
    setResult("");
    setPlayerScore(0);
    setPcScore(0);
    setWinner("");
    setPcChoice(null);
  };

  return {
    result,
    playerScore,
    pcScore,
    winner,
    pcChoice,
    playGame,
    resetGame
  };
};

const PlayGameComponent = () => {
  const { result, playerScore, pcScore, winner, pcChoice, playGame, resetGame } = usePlayGame();

  if (winner) {
    return (
        confetti(),
      <div className="winner-modal">
        <div className="winner-content">
          <h2 className="game-title">
            {winner === "Jugador" ? "¡Felicidades! ¡Ganaste!" : "¡Game Over! Ganó la PC"}
          </h2>
          <div className="score-display">
            Puntuación final
            <p>Jugador: {playerScore} </p>
            <p>PC: {pcScore}</p>
            </div>
          <button
            onClick={resetGame}
            className="winner-button"
            >
            Jugar de nuevo
          </button>
        </div>
      </div>
      );
  }

  return (
    <div className="game-container">
      <h1 className="game-title">Piedra, Papel, Tijeras</h1>
      
      <div className="score-display">
        <span>Jugador: {playerScore}</span>
        <span> PC: {pcScore}</span>
      </div>

      {result && (
        <div className="result-display">
          <p>{result}</p>
          {pcChoice && <p style={{fontSize: '1rem', marginTop: '10px'}}>
          </p>
          }
        </div>
      )}

      <div className="game-buttons">
        {options.map((option) => (
          <button
          key={option}
          onClick={() => playGame(option)}
          className="game-button"
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={resetGame}
        className="reset-button"
      >
        Reiniciar
      </button>
    </div>
  );
};

export default PlayGameComponent;
