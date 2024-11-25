import React, { useState } from "react";
import './Calculation.css'

export const Calculation = () => {
  const [hours, setHours] = useState('');
  const [amount, setAmount] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e) => {
    setHours(e.target.value);
  };

  const calculateAmount = () => {
    const hoursNum = parseFloat(hours);
    let calculatedAmount;

    if (hoursNum <= 5) {
      calculatedAmount = (hoursNum * 1100) + (hoursNum * 100);
    } else {
      calculatedAmount = (hoursNum * 1100) + 500;
    }

    setTimeout(() => { setShowResult(true); }, 1500);

    setAmount(calculatedAmount);
  };

  return (
    <div className="calculation-body">
        <div className="calculation-content">
          <div>
            
          </div>
          <h1>Hourly Rate Calculator</h1> <br/>
          <input
            type="number"
            value={hours}
            onChange={handleInputChange}
            placeholder="Enter hours"
          />

          <button onClick={calculateAmount}>Calculate</button> 
            
          {showResult && amount !== null && (
            <div className="calculation-result">
              <br/><h2>You have to pay: ₹{amount}/- only</h2>
            </div>
          )}
        </div>
    </div>
  )
}




