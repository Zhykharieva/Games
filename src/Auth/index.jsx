import { useState } from 'react';
import ConnectFour from '../components/FourInRow';
import TicTacToeGame from '../components/TicTacToeGame';
const Auth = () => {
  const [isTicTacToe, setTicTacToe] = useState(false)
  const [isFourInRow, setFourInRow] = useState(false)
  let isFourInRowPlayed = true; 
  
  const handleGameChoose = (e: any) => {
    const value = e.target.value;
    console.log(value);
    if(value === 'TicTacToeGame'){
      setTicTacToe(true);
      setFourInRow(false)
      console.log(isTicTacToe);
      
    }
    else {
      setTicTacToe(false);
     setFourInRow(true)
    }
  }
  return (
    
    <div className="App">
      <select name="" id="" onChange={handleGameChoose}>
      <option value="">Choose the game</option>
        <option value="TicTacToeGame">TicTacToeGame</option>
        <option value="FourInRow">FourInRow</option>
      </select>
     
     { isTicTacToe && (<TicTacToeGame/>)}
     { isFourInRow && (<ConnectFour/>)}
    </div>
    
  );

};
export default Auth