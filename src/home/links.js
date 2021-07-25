import '../Home.css';
//import about from "../homeImg/about.jpg";
import { Container, Row, Col } from 'reactstrap';

function Links() {
  return (
    <div className="Home">
       <div className="title">
      <h2 className="titleText"><span>L</span>inks</h2>
      </div>
<center>
      <Container>
        <Row>
     
       
       
          <Col>
          <a href="https://www.linkedin.com/in/itsrahulhere/" target="_blank" className="linkcodebtn ">LinkedIn</a>
          </Col>
          <Col>
          <a href="https://leetcode.com/itsrahulhere/" target="_blank" className="linkcodebtn ">LeetCode</a>
          </Col>
          <Col>
          <a href="https://auth.geeksforgeeks.org/user/itsrahulhere_/practice/" target="_blank" className="linkcodebtn ">GeeksforGeeks</a>
          </Col>
         
          <Col>
          <a href="https://www.hackerrank.com/itsrahulhere_" target="_blank" className="linkcodebtn ">Hackerrank</a>
         </Col> 
        <Col>
          <a href="https://github.com/itsrahulhere/language" target="_blank" className="linkcodebtn ">GitHub</a>
          </Col>
        </Row>
      </Container>
      </center>

    </div>
  );
}

export default Links;