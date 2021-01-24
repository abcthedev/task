import React, { ReactElement } from "react";

interface Props {
  PlaceHolder: string,
  InputLable:string,
  ClassName?:string,
}

function Input(props: Props): ReactElement {
  return (
      <span className={`${props.ClassName} d-flex flex-column`}>
     <div>{props.InputLable}</div>
    <input type="text" placeholder={props.PlaceHolder}/>
    </span>
  );
}

export default Input;
