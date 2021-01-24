import React, { ReactElement } from "react";
import './style.css';

interface Props {
  Type?: "Heading" | "Subheading" | "Paragragh",
  Margin?: boolean,
  Text: string,
  ClassName?:string
}

export default function Text(props: Props): ReactElement {
  return (
    <span
      className={`text ${props.Type} ${
        props.Margin ? "margin" : ""
      } ${props.ClassName}`}
    >
      {props.Text}
    </span>
  );
}
