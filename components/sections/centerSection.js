import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const centerSection = ({ sectionBg, title, children }) => {
  return (
    <section className={`section ${sectionBg}`}>
      <Container>
        <div className="section--center text-center">
          <h2>{title}</h2>
          {children}
        </div>
      </Container>
    </section>
  );
};

export default centerSection;
