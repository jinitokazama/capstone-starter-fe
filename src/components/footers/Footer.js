
//import React from "react";
import Container from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import EmailLink from '../emailLink/EmailLink';

function Footer(props) {
  return (
    <footer className="page-footer font-small blue pt-4">
      <Navbar variant="dark" expand="lg" fluid >
        <Container fluid>
          <Row>
            <Col xs={9}>
              <h8 className="title" style={{ color: 'orange', fontWeight: "bold" }}>IMPORTANT DISCLAIMER</h8>
              <small style={{ color: 'white' }}>
                <br />
                By viewing this webiste, you agree that the owner of this website accepts NO liability for any injury or death occuring as a result of ingesting or exposure to any mushroom.
              </small>
            </Col>
            <Col xs={3}>
              <div>
                <h9 className="title">
                  <EmailLink label="ShroomTycoon" mailto="mailto:support@ShroomTycoon.com" />
                </h9>
                <p style={{ color: 'white' }}>1234 Shroom Circle, Earth Land, LM, 90321</p>
                <small style={{ color: 'white' }}>
                  &copy; {new Date().getFullYear()} Copyright: <a href="https://www.ShroomTycon.com"> www.ShroomTycoon.com </a>
                </small>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </footer>
  );
}


export default Footer;
