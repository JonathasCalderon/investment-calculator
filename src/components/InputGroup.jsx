export default function InputGroup({label, inputName, onChange, value}) {
  return(
    <p>
      <label htmlFor={inputName}>{label}</label>
      <input 
        type="number" 
        name={inputName} 
        required 
        onChange={(event) => onChange(inputName, event.target.value)}
        value={value}
      />
    </p>
  )
}