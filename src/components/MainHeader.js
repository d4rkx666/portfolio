import React from 'react'
import logo from './../images/logo.png';
import mdi_linkedin from './../images/mdi_linkedin.svg';
import mdi_github from './../images/mdi_github.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const MainHeader = () => {
  const menu = [{name:"Portfolio", url:"/"}, {name:"Resume", url:"/#resume"}]
  const available = "Available for work"
  return (
    <Container>
      <Row>
        {/*Header left*/}
        <Col md="4" lg="4" className='text-center text-md-start'>
          <Row>
            <Col>
              <a href="/"><img src={logo}></img></a>
            </Col>
          </Row>
          <Row>
            <Col>
              <span>Full-stack Developer</span><br/>
              <span>UI & UX Designer</span>
            </Col>
          </Row>
        </Col>

        {/* Header center*/}
        <Col xs={{ span: 6, offset: 3 }} md={{ span: 2, offset: 0}} className='verticalAlign text-center'>
          <div className='availableCheck h4 bold'>&bull; {available}</div>
        </Col>

        {/*Header right*/}
        <Col sm="12" md="4" lg="4" className='verticalAlign text-center text-md-end'>
            <div>
              {menu.map((item, index) => {
                return (
                  <a className='mainMenuElements' href={item.url} key={index}>{item.name}</a>
                )
              })}
            </div>
        </Col>
        <Col md lg="2" className="verticalAlign text-center">
          <div className='socialMediaElements'>
            <a href='https://linkedin.com/in/felix-catzin' target='_blank'><img src={mdi_linkedin}></img></a>
            <a href='https://github.com/d4rkx666' target='_blank'><img src={mdi_github}></img></a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
