import { useState } from "react";
import confetti from 'canvas-confetti'

export const options: string[] = ["Piedra", "Papel", "Tijeras"];

    const jugadas = {
      piedra: "tijeras",
      papel: "piedra", 
      tijeras: "papel"
    };

const determineWinner:any = (jugadaUser: typeof options[number], jugadaPc: typeof options[number])=>{
      if (jugadaUser !== jugadaPc){ 
        if(jugadaUser === jugadas.papel && jugadaPc === jugadas.piedra){
          return "Ganador es el Usuario"
        }
        if(jugadaUser === jugadas.piedra && jugadaPc === jugadas.tijeras){
          return "Ganador es el Usuario"
        }
          if(jugadaUser === jugadas.tijeras && jugadaPc === jugadas.papel){
          return "Ganador es el Usuario"
          }
          return "Ganador es PC"
      } 
      else {
          return "Empate"
          }
    }

export const PlayGame = (playerChoice : typeof options[number]) => {
 runPlayGame(playerChoice);
  };

const runPlayGame =(playerChoice : typeof options[number]) =>{
 console.log(`Player Choice ${playerChoice}`);
  
const pcChoice = options[Math.floor(Math.random() * options.length)];
const jugada = determineWinner(playerChoice, pcChoice);
const [winner, setWinner] = useState("");

  const [result, setResult]=useState("");
  const [playerScore, setPlayerScore]= useState(0);
  const [pcScore, setPcScore]=useState(0);

  if (jugada === "Empate") {
    setResult(`Empate: Jugador elige ${playerChoice}, PC elige ${pcChoice}`);
    return;
  }
    if(playerScore === 3 || pcScore === 3){
      return console.log( "Fin de partida"); 
    }
}
export default PlayGame;