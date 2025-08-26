import { useState } from "react";
import confetti from 'canvas-confetti'

export const options = ["Piedra", "Papel", "Tijeras"] as const;

const PlayGame = (playerChoice : typeof options[number]) =>{
  const pcChoice = options[Math.floor(Math.random() * options.length)];
  const [result, setResult]=useState("");
  const [playerScore, setPlayerScore]= useState(0);
  const [pcScore, setPcScore]=useState(0);

  const [winner, setWinner] = useState("");
  const jugada = determineWinner(playerChoice, pcChoice);


  if (jugada === "Empate") {
     setResult(`Empate: Jugador elige ${playerChoice}, PC elige ${pcChoice}`);
     return;
   }

   if (jugada === "Jugador"){ 
     setPlayerScore((prev) => {
       const newScore = prev + 1;
       if(newScore === 3){
         setWinner("Jugador");
         confetti();
       }
       return newScore;
     } );
       setResult(`Jugador elige ${playerChoice},  PC elige ${pcChoice}`);
   } 
   else {
     setPcScore ((prev) => {
       const newScore = prev + 1;
       if (newScore === 3){
         setWinner("PC");
         confetti();
       }
       return newScore;
     } );
     setResult (`PC elige ${pcChoice},  Jugador elige  ${playerChoice}`)
     }

    if(playerScore === 3 || pcScore === 3){
      return console.log( "Fin de partida"); 
    }

  };

  export default PlayGame;
