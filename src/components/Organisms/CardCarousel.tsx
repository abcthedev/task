import React, { Component } from "react";
import { connect } from "react-redux";
import { AppState } from "../../reducers/reducers";
import ImageContainer from "../Molecules/ImageContainer/ImageContainer";
import "./style.css";

interface IStateProps {
  ImgSet: any;
}

interface Props extends IStateProps{
  Description?: string;
}

interface State  {
  fadedleft: boolean;
  fadedright: boolean;
  start: number;
  finish: number;
}

class CardCarousel extends Component<Props, State> {
  state = {
    fadedleft: true,
    fadedright: false,
    start: 0,
    finish: 3,
  };
  leftClick = () => {
    let start = this.state.start;
    let finish = this.state.finish;
    if (start > 0 && finish > 0) {
      this.setState({
        start: start - 3,
        finish: finish - 3,
      });
    } else {
      this.setState({
        fadedleft: true,
      });
    }
    this.setState({
      fadedright: false,
    });
  };
  rightClick = () => {
    let start = this.state.start;
    let finish = this.state.finish;
    if (finish < this.props.ImgSet.length) {
      this.setState({
        start: start + 3,
        finish: finish + 3,
      });
    } else {
      this.setState({
        fadedright: true,
      });
    }

    this.setState({
      fadedleft: false,
    });
  };
  render() {
    var startindex = this.state.start;
    var finishindex = this.state.finish;
    const fadedleft = this.state.fadedleft
      ? "arrow-left faded-left"
      : "arrow-left";
    const fadedright = this.state.fadedright
      ? "arrow-right faded-right"
      : "arrow-right";
    return (
      <>
        <div className="slideshow">
          <div className={fadedleft} onClick={this.leftClick}></div>
          {!!Array.isArray(this.props.ImgSet) && this.props.ImgSet.slice(startindex, finishindex).map(
            (image, imageindex) => {
              return (
                <div key={imageindex}>
                  <ImageContainer
                    ImgSet={image.Img}
                    ClassName={"image"}
                    Description={this.props.Description}
                  />
                </div>
              );
            }
          )}
          <div className={fadedright} onClick={this.rightClick}></div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state:AppState) => ({
  ImgSet: state.ImgData
});


export default connect(mapStateToProps)(CardCarousel);
