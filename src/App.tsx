import "bootstrap/dist/css/bootstrap.min.css";
import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import "./App.css";
import Text from "./components/Atoms/Text/Text";
import CardCarousel from "./components/Organisms/CardCarousel";
import HomePage from "./components/Organisms/HomePage";
import InfoContainer from "./components/Organisms/InfoContainer";
// icons
import { AppState } from "./reducers/reducers";

const SucessData = [
  {
    id: 1,
    Text: "Lorem",
  },

  {
    id: 2,
    Text: "Lorem",
  },

  {
    id: 3,
    Text: "Lorem",
  },
];

interface IStateProps {
  WhyUsData: any;
}

interface Props extends IStateProps{}

function App(props: Props): ReactElement {
  return (
    <Container fluid>
      <Row>
        <Col>
          <HomePage />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text Type="Heading" Text={"Featured Barns"} Margin={true} />
          <CardCarousel Description={"4.7"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text Type="Heading" Text={"Why Us"} Margin={true} />
          <InfoContainer Data={props.WhyUsData} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text
            Type="Heading"
            Text={"Short term barns in wellington"}
            Margin={true}
          />
          <CardCarousel Description={"4.6"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text Type="Heading" Text={"Top Rated Barns"} Margin={true} />
          <CardCarousel Description={"4.6"} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text Type="Heading" Text={"Our Sucess"} Margin={true} />
          <InfoContainer Data={SucessData} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Text Type="Heading" Text={"Customer Testimonials"} Margin={true} />
          <CardCarousel Description={"Customer Data"} />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state:AppState) => ({
  WhyUsData:state.Data
});


export default connect(mapStateToProps)(App);
