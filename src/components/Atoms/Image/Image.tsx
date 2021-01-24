import React, { ReactElement, useEffect, useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  ImgAlt: string,
  ImgSrc: string,
  ClassName?:string,
  PlaceholderImg?:string
}

function CustomImage(props: Props): ReactElement {
  const [imgSrc, setSrc] = useState(props.PlaceholderImg || props.ImgSrc);
  useEffect(() => {
    const img = new Image();
    img.src = props.ImgSrc as string;
    img.addEventListener("load", () => {
      setSrc(props.ImgSrc);
    });
  }, [props.ImgSrc, props.PlaceholderImg]);

  return <img src={imgSrc} alt={props.ImgAlt} className={props.ClassName}/>;
}

export default CustomImage;
