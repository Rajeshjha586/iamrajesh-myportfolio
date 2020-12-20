import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_AKTU from "../../assets/img/experience/AKTU.png";
import Tilt from "react-tilt";
import "./education.styles.css";

const Experience = () => {
  return (
    <div id="education">
      <h1 className="pt-3 text-center font-details-b pb-3">EDUCATION</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_AKTU} alt="AKTU logo" />
                <Card.Title className="text-center">Dr. A.P.J. Abdul Kalam Technical University</Card.Title><br/>
                <h3 className="text-center">Lucknow, India</h3>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Dronacharya Group of Institutions</Card.Title>
                  <h5 className="text-center">Greater Noida, Uttar Pradesh</h5><br/>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    
                    <ul className="text-left">
                      <li><strong>Degree : </strong> Bachelor of Technology in Computer Science And Engineering.</li>
                      <li><strong>Percentage : </strong> 70%. </li> <br/>
        
                      <p>
                        <li><b>Relevant Courseworks :</b></li>
                        <ul>
                          <li>Data Structures and Algorithms</li>
                          <li>Database Management Systems</li>
                          <li>Operating Systems</li>
                          <li>Object Oriented Programming</li>
                        </ul>
                      </p>
                      
                    
                      

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
