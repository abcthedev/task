import React, { ReactElement } from "react";
import Image from "../../Atoms/Image/Image";
import Text from "../../Atoms/Text/Text";

import Logo from "../../../icons/stallerlogo.svg";
import ProfileIcon from '../../../icons/Group 73.png'

interface Props {}

export default function Header(props: Props): ReactElement {
  return (
    <header className={"d-flex align-items-center justify-content-between p-2 w-96 p-absolute"}>
      <Image ImgSrc={Logo} ImgAlt="Logo" />
      <div className={"d-flex align-items-center"}>
        <Text Text="Become a Host" ClassName={"text-white"}/>
        <span className={"profile d-flex"}>
          <Text Type={"Paragragh"} Text="Bhaskar"/>
            <Image ImgSrc={ProfileIcon} ImgAlt={"Profile"} ClassName={"profile-icon ml-2"}/>
        </span>
      </div>
    </header>
  );
}
