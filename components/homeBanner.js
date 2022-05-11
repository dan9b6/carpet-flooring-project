import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function homeBanner() {
  return (
    <div className="banner banner--home">
      <img src="/images/home-banner.jpg" alt="Home Banner" />
      <Container>
        <Row>
          <Col md="6">
            <div className="banner__content">
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                interdum sapien mi, sed luctus diam iaculis et. Nunc eget urna
                lobortis, porta nunc nec, dignissim justo. Nulla facilisi. Morbi
                ut molestie tortor.
              </p>
              <div className="btn-container">
                <a href="/" className="btn btn-primary">
                  Button
                </a>
                <a href="/" className="btn btn-secondary">
                  Button
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
