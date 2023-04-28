const InputComponent = ({ label, placeholder, value, onChange, type, required }) => {
    return (
        <>
            <label className="form-label">{label}</label>
            <input 
                className="form-control"
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                type={type} 
                required={required}
            />
        </>
    )
}

export default InputComponent