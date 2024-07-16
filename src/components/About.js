import React from 'react'
import avatar from './../images/avatar.gif';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export const About = () => {
  return (
      <Container fluid>
         <Row>
            <Col sm={12} md={2} lg={2} className='text-center'>
               <span className='titlePage h1'>ABOUT ME</span>
            </Col>
            <Col sm lg="10" className='verticalAlign'>
               <Row>
                  <Col sm="3" lg="3" className='text-center text-md-start verticalAlign'>
                     <Image className='rounded' src={avatar} fluid></Image>
                  </Col>
                  <Col sm="9" lg="8" className='border-left'>
                     {/*<p className='h3 skillTitle'>
                        Hi there! I’m Felix I’m glad you are here so far, let me tell you some things about me...<br/><br/>
                        I’m very passionate about learning new technologies and a big fan of sci-fi AI... Something I really love about my skills is how my codes becomes into something that can help users to do any kind of tasks easier,  even to myself.<br/><br/>
                        Someday I see myself developing  AI and creating my own robots.<br/><br/>
                        Swing dance and socializing with friends are two things I’m enjoying the most in my life by the way
                     </p>*/}
                     <p className='h3 skillTitle text-center text-md-start'>
                        Hi there! Let me tell you many things about me :D...<br/><br/>
                        In addition to my extense back-end background, I also do Forex Trading in my free time, so yes, I am a nerd about economy stuffs, Cryptocurrencies and movies or memes about that, in fact, my analysis are good enough to make money for my saturday dinner. <a className='h4' target='_blank' href="https://www.octafx.com/copy-trade/master/23481529/">(click here to check my trading account)</a><br/><br/>
                        Besides hard work and boring stuffs, I want to share that I am a Lindy Hop dancer (Swing dance from the 20s ) and this is the thing that most inspires me in my life, because listening to jazz music, socialising and meeting new friends, those beautiful things, are a great part of my whole life.
                     </p>
                  </Col>
               </Row>
            </Col>
         </Row>
      </Container>
   )
}
