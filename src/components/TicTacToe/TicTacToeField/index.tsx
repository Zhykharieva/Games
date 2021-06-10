
import React from "react";
import { FieldProps } from "../../../@types";
import Cell from "../Cell";
import { Board } from "./styled";

const Field: React.FC<FieldProps> = ({board, onClick }) => {

    
  return(
   <Board> 
    {board.map((elem, index) => 
      
        elem.map((cell: JSX.Element, ind) => 
          { 
          return cell = <Cell key={index-ind} value={cell}  onClick={() => onClick({x: index, y: ind})}/>
          }))}
  </Board>
  )};

export default Field;