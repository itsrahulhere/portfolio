import '../Home.css';
//import about from "../homeImg/about.jpg";
import { Container, Row, Col } from 'reactstrap';

function Skills() {
  return (
    <div className="Home">
       <div className="title">
      <h2 className="titleText"><span>S</span>kills</h2>
      </div>
     <Container>
       <Row>
      <Col>
      <center><div className="skillsbox"><h3>C++ (Programming Language)</h3></div></center>
      </Col>
      <Col>
      <center><div className="skillsbox"><h3>Data Structures and Algorithms </h3></div></center>
      </Col>
      {/* <Col>
      <center><div className="skillsbox"><h3>Algorithms</h3></div></center>
      </Col> */}
      
      <center><div className="skillsbox"><h3>Web Development</h3></div></center>
     
      <Col>
      <center><div className="skillsbox"><h3>HTML</h3></div></center>
      </Col>
      <Col>
      <center><div className="skillsbox"><h3>CSS</h3></div></center>
      </Col>
      <Col>
      <center><div className="skillsbox"><h3>Bootstrap</h3></div></center>
      </Col>
      <Col>
      <center><div className="skillsbox"><h3>Javascript</h3></div></center>
      </Col>
      <Col>
      <center><div className="skillsbox"><h3>ReactJs</h3></div></center>
      </Col>
      <Col>
      <center><div className="skillsbox"><h3>NodeJs</h3></div></center>
      </Col>
      <Col>
      <center><div className="skillsbox"><h3>ExpressJs</h3></div></center>
      </Col>
      <Col>
      <center><div className="skillsbox"><h3>MongoDB</h3></div></center>
      </Col>
      <Col>
      <center><div className="skillsbox"><h3>MySQL</h3></div></center>
      </Col>
      <Col>
      <center><div className="skillsbox"><h3>GitHub</h3></div></center>
      </Col>
      <Col>
      <center><div className="skillsbox"><h3>DBMS</h3></div></center>
      </Col>

      </Row>
      </Container>
      
    </div>
  );
}

export default Skills;