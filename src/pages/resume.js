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
                  <embed src={ResumePDF+"#toolbar=0&navpanes=0"} width="100%" height="500px" type="application/pdf"/>
               </Col>
            </Row>
        </Container>
    );
};
 
export default Resume;