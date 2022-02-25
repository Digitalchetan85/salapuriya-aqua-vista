import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="pt-3 pb-3 pt-md-2 pb-md-2">
            <p className="text-white">
            This website is only for the purpose of providing information regarding real estate projects in different geographies. Any information which is being provided on this website is not an advertisement or a solicitation. The company has not verified the information and the compliances of the projects. Further, the company has not checked the RERA* registration status of the real estate projects listed herein. The company does not make any representation in regards to the compliances done against these projects. Please note that you should make yourself aware about the RERA* registration status of the listed real estate projects.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
