const Button = ({onClick, children}) => {
    return (
        <button onClick={onClick} className="button_forever">
            {children}
        </button>
    )
}
export default Button;