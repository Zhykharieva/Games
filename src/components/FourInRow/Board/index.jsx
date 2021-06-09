import React from "react";
import CellButton from "../Cell";

import { Board} from "./styled";

const ConnectFourField = ({board, onClick }) => {

    
  return(
   <Board> 
    {board.map((elem, index) => 
      
        elem.map((cell, ind) => 
          { 
          return cell = <CellButton key={index-ind} value={cell}  onClick={() => onClick({x: index, y: ind})}/>
          }))}
  </Board>
  )};

export default ConnectFourField;