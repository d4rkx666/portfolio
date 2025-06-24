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
            <p>I think is important to mention that I am currently located in Cancun, Mexico. But I'm up anytime for a call or videocall from anywhere in the world!
              <br/>
              So please feel free to send me a whatsapp or email. We can meet and have a coffee while talking about business

            </p>
            <Button 
              variant="outline-light" 
              className="footer-email-btn" 
              href="mailto:fcatzin@hotmail.com"
            >
              fcatzin@hotmail.com
            </Button>
            <p className="mt-4 footer-credit">
              Designed with Figma and developed with React.js by yours truly. © Felix Catzin 2025
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
