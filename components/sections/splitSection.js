import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const splitSection = ({ img, rev, children, altText }) => {
  return (
    <section
      className={`section section--split ${rev ? "section--split__rev" : ""}`}
    >
      <Container>
        <Row>
          <Col md="8" lg="6">
            <div className="section--split__text">{children}</div>
          </Col>
        </Row>
      </Container>
      <img className="section--split__img" src={img} alt={altText} />
    </section>
  );
};

export default splitSection;
