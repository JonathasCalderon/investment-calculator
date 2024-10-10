import InputGroup from "./InputGroup";

export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputGroup label="Initial Investment" inputName="initialInvestment"/>
        <InputGroup label="Annual Investment" inputName="annualInvestment"/>
      </div>
      <div className="input-group">
        <InputGroup label="Expected Return" inputName="expectedReturn"/>
        <InputGroup label="Duration" inputName="duration"/>
      </div>
    
    </div>
  )
}