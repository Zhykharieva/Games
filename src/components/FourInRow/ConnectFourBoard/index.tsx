import React from "react";
import { FieldProps } from "../../../@types";
import CellButton from "../Cell";

import { Board} from "./styled";

const ConnectFourField: React.FC<FieldProps> = ({board, onClick }) => {

    
  return(
   <Board> 
    {board.map((elem, index) => 
      
        elem.map((cell: JSX.Element, ind) => 
          { 
          return cell = <CellButton key={index-ind} value={cell}  onClick={() => onClick({x: index, y: ind})}/>
          }))}
  </Board>
  )};

export default ConnectFourField;