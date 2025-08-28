type ButtonProps = {
    onClick : (e: React.MouseEvent<HTMLButtonElement>) => {};
    label : string;
}

const Button : React.FC<ButtonProps> = ({onClick, label}) =>(
   <button
    onClick={onClick}
    className="px-4 py-2 bg-pink-300 rounded-xl hover:bg-pink-400 shadow-md text-purple-900 font-bold">
    {label}
   </button>);

export default Button;