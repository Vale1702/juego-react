import { useState } from "react";

type WinnerProps = { 
  winner: string | null,
  setWinner: string | null
}

const Winner  [winner, setWinner] = useState <string | null> (null) {


  const jugada  (piedra:string, papel:string, tijeras:string) =>{
      piedra ="tijeras",
      papel= "piedra",
      tijeras= "papel"
    };
 
  const determineWinner = (playerChoice: any, pcChoice: any) : "Empate" | "Jugador" | "PC"
  => {

    if(playerChoice === pcChoice ){
        return "Empate";
    }
    return jugada[playerChoice] === pcChoice ? "Jugador" : "PC";
    }
  } ;

export default Winner;