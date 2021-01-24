import React, { ReactElement } from "react";
import CustomImage from "../Atoms/Image/Image";
import Text from "../Atoms/Text/Text";

interface Props {
  Data: {
    id: number,
    Text: string,
    Icon?: string,
  }[];
}

export default function InfoContainer(props: Props): ReactElement {
  return (
    <div className={"d-flex justify-content-around"}>
      {props.Data.map((row) => (
        <div className={"d-flex flex-column"}>
          {row.Icon && <CustomImage ImgSrc={row.Icon} ImgAlt={"row"} />}
          <Text Text={row.Text} Type="Paragragh" ClassName={"p-1"} />
        </div>
      ))}
    </div>
  );
}
