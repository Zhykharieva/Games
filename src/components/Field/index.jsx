
import React from "react";
import Cell from "../Cell";
import { Board, Row} from "./styled";

const Field = ({board, onClick }) => {

    
  return(
   <Board> 
    {board.map((elem, index) => 
      
        elem.map((cell, ind) => 
          { 
          return cell = <Cell key={index-ind} value={cell}  onClick={() => onClick({x: index, y: ind})}/>
          }))}
  </Board>
  )};

export default Field;