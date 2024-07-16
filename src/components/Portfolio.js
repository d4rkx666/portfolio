import React from 'react';
import { useState } from 'react';
import mdi_arrow from './../images/mdi_arrow.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


import gym_thumbnail from './../images/gym/portrait.png';
import tc_thumbnail from './../images/torontocupcake/portrait.png';
import wta_thumbnail from './../images/wta/portrait.png';

export const Portfolio = () => {  

   const [card, setCard] = useState(0);
   const [showModal, setShowModal] = useState(false);

   function handleCard(index){
      setCard(index);
      setShowModal(true);
   }

   const handleClose = () => setShowModal(false);

   const cards = [
      {
         title: "Welcome Travel Accommodation",
         description: "Welcome Travel Accommodation is a real state company which rentes rooms in sharing houses around Vancouver, BC.",
         projectSteps: "I am currently designing and developing the website of the company.\n\nI am designing and developing the customer and admin panel, which are the most important goals for the company, so I can boost the internal management up to 80% of productivity.\n\nNow the current project fase is on development the functionality of the panels and designing the full database, but after finishing the main goal, I will improve the main page design.",
         duration: "May - Current",
         role: "Web Master | Developer & Designer",
         source: "https://welcometravelaccommodation.com/",
         skills: ["PHP language", "MySQL Databases", "Javascript", "HTML5 and CSS5"],
         designPrototypes: [
         ],
         thumbnail: wta_thumbnail
      },
      {
         title: "Toronto Cupcake Redesign",
         description: "In this project, my team and I redesigned the Toronto Cupcake website. It was a non-real project for the school.",
         projectSteps: "The first steps we did, was following the UX design process: Define, Research, Analyze, Design, Validate. We used User Persona and Journey Maps to help the research.\n\nI designed and prototyped the Catering page based on the combination between Events and Catering in the old website, so they can fit it in a single page and be easily readable.\n\nThis solution came up with the research we did before, such as looking for bad designing at the website, colours, layouts and misplaced information.",
         duration: "June 2024",
         role: "Designer and 2nd leader",
         source: "https://www.figma.com/design/z8faBI5TzfCwoDMunm8Z1B/Design-Communication-(Felix%2C-Mark%2C-Omar%2C-Seina)-(Copy)?node-id=743-3113&t=lA34nN47tbECaNdQ-1",
         skills: ["Figma", "Prototyping"],
         designPrototypes: [
            {title: "Prototype I did", sourceUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fz8faBI5TzfCwoDMunm8Z1B%2FDesign-Communication-(Felix%252C-Mark%252C-Omar%252C-Seina)-(Copy)%3Fnode-id%3D743-3314%26t%3Dwb4NHLnULuyNhr05-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26page-id%3D743%253A3113%26starting-point-node-id%3D797%253A8572"},
            {title: "Full team's prototype", sourceUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fz8faBI5TzfCwoDMunm8Z1B%2FDesign-Communication-(Felix%252C-Mark%252C-Omar%252C-Seina)-(Copy)%3Fnode-id%3D797-8572%26t%3DUdtjDYnvGk0uLrGk-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26page-id%3D743%253A3113%26starting-point-node-id%3D797%253A8572"}
         ],
         thumbnail: tc_thumbnail
      },
      {
         title: "GYM Project",
         description: "The GYM project is the first project from my UI/UX Design course.",
         projectSteps: "I have done many researches for this GYM project such as card sorting, tree sorting, so on. And analyse data with charts such as Similarity Matrix, Dendrograms and Pie Tree.\n\nI also followed Jacob's law for my design in order the users can relate most of the UI elements position.",
         duration: "Jan - Feb 2024",
         role: "UI Designer, UX Researcher",
         source: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDES7ZFdktpbDeS2MiZ2LNn%2FFinal-Project%3Fnode-id%3D536-4853%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26t%3DF6f5UvO1zRLxMJbE-1",
         skills: ["Figma", "Prototyping", "Research"],
         designPrototypes: [
            {title: "Figma Prototype", sourceUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDES7ZFdktpbDeS2MiZ2LNn%2FFinal-Project%3Fnode-id%3D536-4853%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26t%3DF6f5UvO1zRLxMJbE-1"},
            {title: "Figma Source", sourceUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FDES7ZFdktpbDeS2MiZ2LNn%2FFinal-Project%3Fnode-id%3D509-8725%26t%3DRUH7gtMT2xVsuFT4-1"},
            {title: "UI Kit", sourceUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FDES7ZFdktpbDeS2MiZ2LNn%2FFinal-Project%3Fnode-id%3D385-8%26t%3DmUoBEtJtZwVcLvJT-1"}],
         thumbnail: gym_thumbnail
      }
   ];

   return (
      <Container fluid>
         <Row>
            <hr/>
            <Col sm={12} md={2} lg={2} className='text-center'>
               <span className='titlePage h1'>PORTFOLIO</span>
            </Col>
            <Col sm="12" md="9" lg="9" className='verticalAlign'>
               <Row>
                  {cards.map((item, index) => {
                     return (
                        <Col sm="12" lg="4" className='p-2'>
                           <Card className='portfolioCard' onClick={() => handleCard(index)}>
                              <Card.Img style={{height:"180px"}} variant="top" src={item.thumbnail}/>
                              <Card.Body>
                              <Card.Title>{item.title}</Card.Title>
                              <Card.Text className='text-truncate'>{item.description}</Card.Text>
                              </Card.Body>
                              <Card.Body>
                                 <img src={mdi_arrow} className='cardArrow'></img>
                              </Card.Body>
                           </Card>
                        </Col>
                     )
                  })}
               </Row>
            </Col>
         </Row>



         <Modal show={showModal} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
               
            </Modal.Header>
            <Modal.Body className='bg-felix'>
               <Container className='text-white'>
                  <Row>
                     <Col md lg="8">
                        <Row>
                           <Col>
                              <h1 className='h1'>{cards[card].title}</h1>
                           </Col>
                        </Row>
                        <Row>
                           <h3>{cards[card].description}</h3>
                        </Row>                           
                     </Col>
                     <Col className='d-block d-sm-none'>
                        <hr/>
                     </Col>
                     <Col md lg="4">
                        <Row>
                           <Col xs="6">
                              <h5>Role</h5>
                              <p>{cards[card].role}</p>
                           </Col>
                           <Col xs="6">
                              <h5>Duration</h5>
                              <p>{cards[card].duration}</p>
                           </Col>
                        </Row>
                        <Row>
                           <Col xs="6">
                              <h5>Source</h5>
                              <p><a href={cards[card].source} target='_blank'>View source</a></p>
                           </Col>
                           <Col xs="6">
                              <h5>Skills</h5>
                              <ul>
                                 {cards[card].skills.map((item, index) => {
                                    return (
                                       <li>{item}</li>
                                    )
                                 })}
                              </ul>
                           </Col>
                        </Row>
                     </Col>
                  </Row>
                  <hr/>
                  <Row>
                     <Col md lg="4" className='verticalAlign'>
                        <p style={{ whiteSpace: 'break-spaces'}} className='text-justify'>{`${cards[card].projectSteps}`}</p>
                     </Col>
                     <Col md lg="8">
                        <img width="100%" src={cards[card].thumbnail}></img>
                     </Col>
                  </Row>
                  <hr/>
                  <Row>
                     <Col md lg="12">
                        <Accordion defaultActiveKey={[(card+"0"),(card+"1"),(card+"2"),(card+"3"),(card+"4")]} alwaysOpen>
                           {cards[card].designPrototypes.map((item, index) => {
                              return (
                                 <Accordion.Item eventKey={(card+""+index)}>
                                    <Accordion.Header>{item.title}</Accordion.Header>
                                    <Accordion.Body>
                                       <iframe width="100%" height="500px" src={item.sourceUrl}></iframe>
                                    </Accordion.Body>
                                 </Accordion.Item>
                              )
                           })}
                        </Accordion>
                     </Col>
                  </Row>
               </Container>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="danger" onClick={handleClose}>
                  Close
               </Button>
            </Modal.Footer>
         </Modal>
         <hr/>
      </Container>
  )
}
