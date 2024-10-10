import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({userInput}) {

  
  const annualData = calculateInvestmentResults(userInput)
  console.log(userInput)
  const initialInvestment = 
    annualData[0].valueEndOfYear - 
    annualData[0].interest -
    annualData[0].annualInvestment

  return(
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest(Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {
          annualData.map((rowData) => {

            const totalInterest = 
              rowData.valueEndOfYear - 
              rowData.annualInvestment * rowData.year - 
              initialInvestment;

            const totalAmountInvested = rowData.valueEndOfYear - totalInterest;

            return (
              <tr key={rowData.year}>
                <th scope="row">{rowData.year}</th>
                <td>{formatter.format(rowData.valueEndOfYear)}</td>
                <td>{formatter.format(rowData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}