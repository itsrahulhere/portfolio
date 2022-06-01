import '../Home.css';
//import about from "../homeImg/about.jpg";
import { Container, Row, Col } from 'reactstrap';

function Projects() {
  return (
    <div className="Home">
       <div className="title">
        <center><h2 className="titleText"><span>P</span>rojects</h2></center>
      </div>

      <Container>
      <Row>
        <Col>
         
         <div className="Projectbox">  
          <center><h3>iNOTEBOOK WEB-APP</h3></center>
          <p style={{lineHeight:"100%"}}> 
          <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Web app to save notes, developed using ReactJs & NodeJs <br/>
          <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Designed a basic UI and Backend with MongoDB for Database<br/>
          <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Technology Used: HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACTJS, MONGODB, EXPRESSJS, NODEJS<br/></p>
         
         
          <div className="inputBox" style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <a href="https://github.com/itsrahulhere/iNotebook" target="_blank" className="codebtn ">Code</a>
          {/* <a href="#" target="_blank" className="btnn ">Live</a> */}
          </div>
          </div>
  

        </Col> 
        </Row>
      <Row>
        <Col>
         
         <div className="Projectbox">  
          <center><h3>NEWS WEB-APP</h3></center>
          <p style={{lineHeight:"100%"}}> 
          {/* <span style={{color: "#ff0157", fontSize:"50px"}}>.</span>  <br/> */}
          <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Used News-API to build this web-app<br/>
          <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Technology Used: HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACTJS<br/></p>
         
         
          <div className="inputBox" style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <a href="https://github.com/itsrahulhere/News" target="_blank" className="codebtn ">Code</a>
          {/* <a href="https://itsrahulhere.github.io/language/" target="_blank" className="btnn ">Live</a> */}
          </div>
          </div>
  

        </Col> 
        </Row>
         <Row>
        <Col>
         
         <div className="Projectbox">  
          <center><h3>SELECT PROGRAMMING LANGUAGE</h3></center>
          <p style={{lineHeight:"100%"}}> 
          <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Frontend web page using concept of Conditional Rendering <br/>
          <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Help students to pick a language that they can start learning right away<br/>
          <span style={{color: "#ff0157", fontSize:"50px"}}>.</span> Technology Used: HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACTJS, GITHUB<br/></p>
         
         
          <div className="inputBox" style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <a href="https://github.com/itsrahulhere/language" target="_blank" className="codebtn ">Code</a>
          <a href="https://itsrahulhere.github.io/language/" target="_blank" className="btnn ">Live</a>
          </div>
          </div>
  

        </Col> 
        </Row> 
        
      </Container>
    </div>
  );
}

export default Projects;