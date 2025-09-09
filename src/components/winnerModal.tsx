import confetti from "canvas-confetti";

export function WinnerModal ({winner, setWinner, resetGame, playerScore,pcScore}: any){
    if (winner) {
        confetti();
    }
    const winnerText = 
    winner === "Empate" 
    ? "¡Es un EMPATE! 🙌  ¡Sigue jugando!" 
    :  winner === "Jugador" 
    ? "¡Felicidades, Ganó Jugador 🏆!" 
    : "¡Game Over! Ganó la PC 🤖";

    // Cierra el modal solo si se hace clic fuera del contenido
    const handleClose = (e:any) => {
        if (e.target.classList.contains("winner")) {
            setWinner(null); // Cierra el modal sin reiniciar el juego
        }
    };

    return(
        <div className="winner-modal" onClick={handleClose}>
            <div className="winner-content">
                <h2 className="game-title"> {winnerText}</h2> 

                {winner !==  "Empate" &&(
                    <div className="score-display">
                        Puntuación Final
                        <p>Jugador: {playerScore} </p>
                        <p>PC: {pcScore}</p>
                    </div>
                )}

                {winner !== "Empate" && (
                    <button onClick={resetGame} className="winner-button">
                        Juego nuevo
                    </button>
                )}
            </div>
        </div>
    );
}