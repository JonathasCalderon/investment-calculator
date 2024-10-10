export default function InputGroup({label, inputName}) {
  return(
    <div>
      <label htmlFor={inputName}>{label}</label>
      <input type="text" name={inputName}/>
    </div>
  )
}