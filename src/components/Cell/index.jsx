import React from "react";
import {Cell} from './styled'
const CellButton = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;

  return (
    <Cell className={style} onClick={onClick}>
      {value}
    </Cell>
  );
};

export default CellButton;