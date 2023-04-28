const ButtonComponent = ({ onClick, type, disabled, variant, label }) => {
    return (
        <button 
            onClick={onClick} 
            type={type} 
            disabled={disabled}  
            className={`btn ${variant}`}
            >
            {label}
        </button>
    )
}

export default ButtonComponent