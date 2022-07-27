import React, { useState } from 'react'
import './app.css'

export function App() {
  const [number, setNumber] = useState(0);
  const [romanNumber, setRomanNumber] = useState("...")

  var romanLetters = [[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],[1, 'I']];
  
  function convertToRoman(num) {
    if (num === 0) {
      return '';
    }
    for (var i = 0; i < romanLetters.length; i++) {
      if (num >= romanLetters[i][0]) {                
        return romanLetters[i][1] + convertToRoman(num - romanLetters[i][0]); /* Concatenate - recursion */
      }
    }
  }

  function displayRomanNumber(){   
    setRomanNumber(convertToRoman(number));    
  }

  return (
    <>
      <div className="App">
      
      <h1>Convert to Roman Numbers</h1>
      <div className="display">
        <input 
          className="input" 
          placeholder="Type a number" 
          onChange={(n) => setNumber(n.target.value)}
          >            
          </input>
        <button onClick={displayRomanNumber}>Convert</button>
        <p>{romanNumber}</p>
        
      </div>
      <p className="enter-number">
        Enter a number starting from 1
      </p>
      </div>
    </>    
  )
}

