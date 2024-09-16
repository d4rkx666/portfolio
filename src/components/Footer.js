import React from 'react'

import { Container, Button, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="footer-heading">Let's get in touch</h2>
            <hr className="footer-divider" /> {/* Divider */}
            <p>Please feel free to send me an email. We can meet and have a coffee while talking about business!</p>
            <Button 
              variant="outline-light" 
              className="footer-email-btn" 
              href="mailto:fcatzin@hotmail.com"
            >
              fcatzin@hotmail.com
            </Button>
            <p className="mt-4 footer-credit">
              Designed with Figma and developed with ReactJS by yours truly. © Felix Catzin 2024
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
