import '../Home.css';
//import about from "../homeImg/about.jpg";
import { Container, Row, Col } from 'reactstrap';

function Experience() {
  return (
    <div className="Home">
       <div className="title">
        <center><h2 className="titleText"><span>E</span>xperience</h2></center>
        <p></p>
      </div>
      
      <Container>
        <Row>
          <Col>
            <div className="Projectbox">  
              <center><h4>Flutter and Backend Development Intern</h4></center>
              <center><h3>NPR Supporting Services Pvt. Ltd.</h3></center>
              <center><h6>02/2021 - 04/2021</h6></center>
              <p style={{lineHeight:"100%"}}> 
              <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Monal Creation Project - Worked as back-end developer for creating the backend of an app for the client <br/>
              <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> APRJ Project - Developed the backend for a matrimonial app for jain community<br/>
              <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Worked on: NodeJs, ExpressJs, MongoDB, Postman API, GitHub<br/></p>
            </div>
          </Col> 
          </Row>
          <Row>
          <Col>
            <div className="Projectbox">  
              <center><h4>Web Developer Intern</h4></center>
              <center><h3>NPR Supporting Services Pvt. Ltd.</h3></center>
              <center><h6>03/2020 - 04/2020</h6></center>
              <p style={{lineHeight:"100%"}}> 
              <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Part of front-end team for designing the UI in React Framework <br/>
              <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Translate the different UI/UX part as assign from the design team into HTML and CSS<br/>
              <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Worked on: HTML, CSS, Bootstrap, JavaScript, ReactJs, GitHub<br/></p>
            </div>
          </Col> 
        </Row>
      </Container>
    </div>
  );
}

export default Experience;