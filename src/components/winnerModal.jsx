export function WinnerModal ({winner, setWinner, resetGame}){
    if (!winner ) return null

    const winnerText = winner === "Empate" 
    ? "¡Es un EMPATE! 🙌  ¡Sigue jugando!" 
    :  winner === "Jugador" 
    ? "¡Jugador Gana 🏆!" 
    : "¡PC Gana 🤖!";

    // Cierra el modal solo si se hace clic fuera del contenido
    const handleClose = (e) => {
        if (e.target.classList.contains("winner")) {
            setWinner(null); // Cierra el modal sin reiniciar el juego
        }
    };

    return(
        <section className="winner" onClick={handleClose}>
            <div className="text">
                <h2> {winnerText}</h2> 
                {winner !== "Empate" && (
                    <button onClick={resetGame} className="win">Nuevo Juego</button>)}
            </div>
        </section>
    )
}