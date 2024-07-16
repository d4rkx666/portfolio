import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TypeAnimation } from 'react-type-animation';

export const MainHeaderBody = () => {
     return (
          <Container>
               <Row>
                    <Col>
                         
                         <div className='middleMsg'>
                              <span className='littleHeaderMsg h4 light'>
                              <TypeAnimation
                                        sequence={[
                                             5100,
                                             'welcomeMsg();', // Types 'One'
                                        ]}
                                        cursor={false}
                                        repeat={0}/>
                              </span>
                              <span className='headerMsg h1 bold'>
                                   <TypeAnimation
                                        sequence={[
                                             5900,
                                             'I’m Felix, please take a look and contact me!', // Types 'One'
                                        ]}
                                        speed={90}
                                        cursor={true}
                                        repeat={0}/>
                              </span>
                         </div>
                         <div className='bottomMsg'>
                              <p style={{ whiteSpace: 'break-spaces' }} className='codeMsg h4 light'>
                                   <TypeAnimation
                                        sequence={[
                                        'public String welcoeMsg()[', // Types 'One'
                                        30,
                                        'public String welcomeMsg(){',
                                        ]}
                                        speed={80}
                                        cursor={true}
                                        repeat={0}/>
                                   <br/>
                                   <TypeAnimation
                                        sequence={[
                                        1000,
                                        '     String name = “', // Types 'One'
                                        ]}
                                        speed={80}
                                        cursor={true}
                                        repeat={0}/>
                                   <TypeAnimation
                                        sequence={[
                                        1700,
                                        'Feliz Catzin ”;', // Types 'One'
                                        10,
                                        'Felix ”;', // Types 'One'
                                        ]}
                                        wrapper="strong"
                                        speed={80}
                                        cursor={true}
                                        repeat={0}/>
                                   <br/>
                                   <TypeAnimation
                                        sequence={[
                                        2600,
                                        '     return “', // Types 'One'
                                        ]}
                                        speed={80}
                                        cursor={true}
                                        repeat={0}/>
                                   <TypeAnimation
                                        sequence={[
                                        3200,
                                        "I'm” + name + “, please take a look and contact me!”;", // Types 'One'
                                        ]}
                                        wrapper="strong"
                                        speed={80}
                                        cursor={true}
                                        repeat={0}/>
                                   <br/>
                                   <TypeAnimation
                                        sequence={[
                                        5000,
                                        "}", // Types 'One'
                                        ]}
                                        speed={80}
                                        cursor={true}
                                        repeat={0}/>
                              </p>
                         </div>
                    </Col>
               </Row>
          </Container>
     )
}
