import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const uspBanner = () => {
  return (
    <div className="banner--usp section--tertiary">
      <Container>
        <Row>
          <Col md="4" className="text-center">
            <div className="banner--usp-box">
              <p>Low Prices</p>
            </div>
          </Col>
          <Col md="4" className="text-center">
            <div className="banner--usp-box">
              <p>Fitting Services</p>
            </div>
          </Col>
          <Col md="4" className="text-center">
            <div className="banner--usp-box">
              <p>Free Quote</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default uspBanner;
