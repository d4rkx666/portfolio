import React from "react";
import ResumePDF from "./../files/resume.pdf";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Resume = () => {
    return (
        <Container fluid>
            <hr/>
            <Row>
               <Col>
                    <iframe frameborder="0" width="100%" height="500px" src={`https://docs.google.com/gview?url=${encodeURIComponent('http://'+window.location.hostname+ResumePDF)}&embedded=true`}></iframe>


               </Col>
            </Row>
        </Container>
    );
};
 
export default Resume;