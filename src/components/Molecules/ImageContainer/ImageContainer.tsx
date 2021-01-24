import React, { Component } from "react";
import LoadImage from "../../../icons/preload.gif";
// import SrcImage from "../../../icons/rect.png";
import CustomImage from "../../Atoms/Image/Image";
import Heart from "../../../icons/Vector.svg";

import "./style.css";
import Text from "../../Atoms/Text/Text";

interface Props {
  ImgSet: string[],
  ClassName?: string,
  Description?: string,
}

interface State {
  CurrentImageIndex: number
}

class ImageContainer extends Component<Props, State> {
  state = {
    CurrentImageIndex: 0,
  };

  private IntervalId: any;

  componentDidMount() {
    this.IntervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          CurrentImageIndex:
            prevState.CurrentImageIndex + 1 === this.props.ImgSet.length
              ? 0
              : prevState.CurrentImageIndex + 1,
        };
      });
    }, 8000);
  }
  componentWillUnmount() {
    clearInterval(this.IntervalId);
  }

  render() {
    return (
      <>
        <div className="customImage container">
          <CustomImage
            ImgSrc={this.props.ImgSet[this.state.CurrentImageIndex]}
            ImgAlt={"img"}
            PlaceholderImg={LoadImage}
            ClassName={`${this.props.ClassName}`}
          />
          <div className="rightLabelsGroup">
            <div className={"rightLabel"}>
              <CustomImage ImgAlt={"wishlist"} ImgSrc={Heart} />
            </div>
          </div>
        </div>
        {!!this.props.Description && (
          <Text Type="Paragragh" Text={this.props.Description} ClassName={"p-3"}/>
        )}
      </>
    );
  }
}

export default ImageContainer;
