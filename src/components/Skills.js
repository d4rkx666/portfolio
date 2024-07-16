import React from 'react';
import badge1 from './../images/badge_1.svg';
import badge2 from './../images/badge_2.svg';
import badge3 from './../images/badge_3.svg';

import react from './../images/reactjs.svg';
import js from './../images/javascript.svg';
import php from './../images/php.svg';
import java from './../images/java.svg';
import html from './../images/html.svg';
import css from './../images/css.svg';
import figma from './../images/figma.svg';
import scrum from './../images/scrum.svg';
import kanban from './../images/kanban.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export const Skills = () => {
  return (
      <Container fluid>
         <Row>
            <Col sm={12} md={2} lg={2} className='text-center'>
               <span className='titlePage h1'>SKILLS</span>
            </Col>
            <Col sm lg="10">
               <Row>
                  <Col sm="12" md="9" lg="9" className='verticalAlign'>
                     <Row>
                        <Col md lg="4" sm="12" className='verticalAlign text-center text-md-start'>
                           <span className='skillTitle h4'>PROGRAMMING LANGUAGES</span>
                        </Col>
                        <Col sm="12" lg="8">
                           <Row>
                              <Col xs="3" sm="3" md="3" lg="3" className='text-center text-md-start pt-2'>
                                 <Image src={react}/>
                              </Col>
                              <Col xs="3" sm="3" md="3" lg="3" className='text-center text-md-start pt-2'>
                                 <Image src={js}/>
                              </Col>
                              <Col xs="3" sm="3" md="3" lg="3" className='text-center text-md-start pt-2'>
                                 <Image src={php}/>
                              </Col>
                              <Col xs="3" sm="3" md="3" lg="3" className='text-center text-md-start pt-2'>
                                 <Image src={java}/>
                              </Col>
                           </Row>
                        </Col>
                     </Row>
                     <hr style={{border:"0px"}}/>
                     <Row>
                        <Col md lg="4" sm="12" className='verticalAlign text-center text-md-start'>
                           <span className='skillTitle h4'>DESIGNING LANGUAGES & TOOLS</span>
                        </Col>
                        <Col sm="12" lg="8">
                           <Row>
                              <Col xs="4" sm="4" md="3" lg="3" className='text-center text-md-start pt-2'>
                                 <Image src={html}/>
                              </Col>
                              <Col xs="4" sm="4" md="3" lg="3" className='text-center text-md-start pt-2'>
                                 <Image src={css}/>
                              </Col>
                              <Col xs="4" sm="4" md="3" lg="3" className='text-center text-md-start pt-2'>
                                 <Image src={figma}/>
                              </Col>
                           </Row>
                        </Col>
                     </Row>
                     <hr style={{border:"0px"}}/>
                     <Row>
                        <Col md="4" lg="4" sm="12" className='verticalAlign text-center text-md-start'>
                           <span className='skillTitle h4 '>AGILE METHODOLOGIES</span>
                        </Col>
                        <Col sm="12" lg="8">
                           <Row>
                              <Col xs="6" sm="6" md="3" lg="3" className='text-center text-md-start pt-2'>
                                 <Image src={scrum}/>
                              </Col>
                              <Col xs="6" sm="6" md="3" lg="3" className='text-center text-md-start pt-2'>
                              <Image src={kanban}/>
                              </Col>
                           </Row>
                        </Col>
                     </Row>
                  </Col>
                  <Col className='d-block d-sm-none'>
                     <hr/>
                  </Col>
                  <Col sm="12" md="3" lg="3" className='border-left'>
                     <Row className='text-center'>
                        <Col xs="4" sm="4" md="12" lg="12">
                           <img src={badge1}></img>
                        </Col>
                        <Col xs="4" sm="4" md="12" lg="12">
                           <img src={badge2}></img>
                        </Col>
                        <Col xs="4" sm="4" md="12" lg="12">
                           <img src={badge3}></img>
                        </Col>
                     </Row>
                  </Col>
               </Row>
            </Col>
      </Row>
      <hr/>
   </Container>
  )
}
