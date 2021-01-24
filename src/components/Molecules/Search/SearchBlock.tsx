import React, { ReactElement } from "react";
import CustomButton from "../../Atoms/Buttons/CustomButton";
import Input from "../../Atoms/Text/Input";

interface Props {}

export default function SearchBlock(props: Props): ReactElement {
  return (
    <div className={"d-flex p-absolute search-block p-2 bg-white rounded"}>
      <Input
        InputLable={"Location"}
        PlaceHolder={"Enter your destination"}
        ClassName={"p-1"}
      />
      <Input
        InputLable={"Location"}
        PlaceHolder={"Enter your destination"}
        ClassName={"p-1"}
      />
      <Input
        InputLable={"Location"}
        PlaceHolder={"Enter your destination"}
        ClassName={"p-1"}
      />
      <CustomButton BtnName={"Search"} ClassName={"px-4 py-0 rounded text-white bg-danger"}/>
    </div>
  );
}
