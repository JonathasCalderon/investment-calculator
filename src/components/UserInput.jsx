import InputGroup from "./InputGroup";

export default function UserInput({onChange, userInput}) {

  return (
    <section id="user-input"> 
      <div className="input-group">
        <InputGroup label="Initial Investment" inputName="initialInvestment" onChange={onChange} value={userInput.initialInvestment}/>
        <InputGroup label="Annual Investment" inputName="annualInvestment" onChange={onChange} value={userInput.annualInvestment}/>
      </div>
      <div className="input-group">
        <InputGroup label="Expected Return" inputName="expectedReturn" onChange={onChange} value={userInput.expectedReturn}/>
        <InputGroup label="Duration" inputName="duration" onChange={onChange} value={userInput.duration}/>
      </div>
    
    </section>
  )
}