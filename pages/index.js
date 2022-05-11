import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Navigation from "../components/navigation";
import HomeBanner from "../components/homeBanner";
import UspBanner from "../components/banners/uspBanner";
import SplitSection from "../components/sections/splitSection";
import CenterSection from "../components/sections/centerSection";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HomeBanner />
      <UspBanner />
      <SplitSection img="/images/home-banner.jpg" altText="test" rev>
        <h2>Free No Obligation Quotes for Carpet & Flooring</h2>
        <p>
          As part of our service, we can visit your property, measure your home
          and design a complete plan for you. We will then provide an estimated
          quote for the cost of your flooring and the installation, completely
          free of charge with no-obligation.
        </p>
        <p>Fill out the form below to recieve a free quote.</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="number" placeholder="Enter contact number" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={4} />
            <Form.Text className="text-muted">
              We'll never share your email or phone number with anyone else.
            </Form.Text>
          </Form.Group>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </SplitSection>
      <CenterSection sectionBg="section--secondary" title="See Our Services">
        <Row>
          <Col lg="4">
            <div className="service-box">
              <div className="service-box__content">
                <h3>Carpet & Flooring Supply</h3>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="service-box">
              <div className="service-box__content">
                <h3>Carpet & Flooring Design Services</h3>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="service-box">
              <div className="service-box__content">
                <h3>Carpet & Flooring Installation Service</h3>
              </div>
            </div>
          </Col>
        </Row>
      </CenterSection>
      <section className="section section--primary">
        <Container>
          <Row>
            <Col md="6">
              <h2>Carpet & Flooring Supply</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
