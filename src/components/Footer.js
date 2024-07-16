import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <Container fluid>
      <Row className='bg-felix'>
        <Col sm="3" md="3" lg="3" className='verticalAlign text-center'>
          <p className="light h5">Designed with Figma and developed with ReactJS by yours truly.
          © Felix Catzin 2024</p>
        </Col>
        <Col sm="8" md="8" lg="8">
          <Row>
            <Col className="text-center">
              <Row>
                  <Col sm="12" md="12" lg="12">
                    <h1>Let's get in touch</h1>
                  </Col>
              </Row>
              <Row>
                <Col md="9" lg="9" className='text-center text-md-end'>
                  <p>Please feel free to send me an email.<br/> We can meet and have a coffee while talking about business!</p>
                </Col>
                <Col md="3" lg="3">
                  <a href="mailto:fcatzin@hotmail.com"><button className="emailSquare" onClick={() => {navigator.clipboard.writeText("fcatzin@hotmail.com")}}>
                    fcatzin@hotmail.com
                  </button></a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
