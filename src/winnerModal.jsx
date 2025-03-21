export function WinnerModal ({winner, resetGame}){
    if (winner === null) return null

    const winnerText = 
    winner === "Empate" ? "¡Es un EMPATE! 🙌" : 
    winner === false ? "Jugador Gana 🏆" : "PC Gana 🤖";

    const handleClose = (e) =>{
        if(e.target.classList.contains('winner')){
            resetGame();
        }
    };
    
    return(
        <section className="winner" onClick={handleClose}>
            <div className="text">
                <h2> {winnerText}</h2>
                {/* <div className="win">{winner}</div> */}
                <button onClick={resetGame}>Nuevo Juego </button>
            </div>
        </section>
    )
}