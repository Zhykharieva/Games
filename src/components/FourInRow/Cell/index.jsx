import React from "react";
import {Cell} from './styled'
const CellButton = ({ value, onClick }) => {
  const style = value ? `ring ${value}` : `ring`;

  return (
    <Cell className={style} onClick={onClick}>
      {value}
    </Cell>
  );
};

export default CellButton;