import Button from '../Button/Button'
import {options} from  "../PlayGame/PlayGame"
//React.FC = Functional Component en React.
const Container : React.FC = () =>{
    const handleClick = (p0: string)  => {
      console.log("Botón elegido:", p0);
};

 return(
        <div className="grid max-w-full  col-auto w-80 h-80 m-15 bg-purple-200 shadow-2xl rounded-2xl place-content-center hover:shadow-pink-300 text-pink-900 gap-4">
        <h1 className="text-2xl">Juego Piedra Papel o Tijeras</h1>
            <p className="text-2xl font-sans text-center"> Puntaje</p>
            <p></p>
        {
            options.map((option) =>(
                <Button key={option} onClick={ async () => handleClick(option)} label={option}/>
            ))
        }
        </div>
    )
}

export default Container;