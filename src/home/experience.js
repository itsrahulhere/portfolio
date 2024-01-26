import "../Home.css";
//import about from "../homeImg/about.jpg";
import { Container, Row, Col } from "reactstrap";

function Experience() {
  return (
    <div className="Home">
      <div className="title">
        <center>
          <h2 className="titleText">
            <span>E</span>xperience
          </h2>
        </center>
        <p></p>
      </div>

      <Container>
        <Row>
          <Col>
            <div className="Projectbox">
              <center>
                <h4>Software Engineer</h4>
              </center>
              <center>
                <h3>Nagarro</h3>
              </center>
              <center>
                <h6>07/2022 - Present</h6>
              </center>
              <p style={{ lineHeight: "100%" }}>
                <span style={{ color: "#ff0157", fontSize: "50px" }}>.</span>{" "}
                Implemented seamless Keycloak Authentication integration across
                the frontend and middleware layers, resulting in a substantial
                improvement in overall app security.
                <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                Developed a robust Spring Boot API, enabling seamless data
                retrieval from a PostgreSQL database, resulting in a 25%
                reduction in frontend loading time and an improved user
                experience.
                <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                Implemented end-to-end automation for the client, drastically
                reducing wait time from 10-20 minutes to nearly instant
                retrieval of file paths in AWS buckets and Azure containers via
                a TreeView, with 95% increase in customer satisfaction scores.
                <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                Engineered and build efficient dynamic dropdowns in ReactJs,
                contributing to a remarkable 75% reduction in frontend loading
                time and delivering an enhanced user experience.
                <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                Enhanced the UI of the universal application using ReactJS which
                made the application go live on time.
                <br />
                {/* <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>
                Java Training: Its process consists of various courses which
                includes data structures, database management, MVC
                (Model-View-Controller) App development and frontend (Angular)
                training which helps in learning various technologies and tools.
                <br /> */}
                {/* <span style={{ color: "#ff0157", fontSize: "50px" }}>.</span> <br /> */}
                {/* <span style={{ color: "#ff0157", fontSize: "50px" }}>.</span>
                Technology & Tools: Angular, HTML, CSS, JavaScript, SQL, Java,
                Spring Boot, Spring MVC, Maven
                <br /> */}
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="Projectbox">
              <center>
                <h4>Flutter and Backend Development Intern</h4>
              </center>
              <center>
                <h3>NPR Supporting Services Pvt. Ltd.</h3>
              </center>
              <center>
                <h6>02/2021 - 04/2021</h6>
              </center>
              <p style={{ lineHeight: "100%" }}>
                <span style={{ color: "#ff0157", fontSize: "50px" }}>.</span>{" "}
                Monal Creation Project - Worked as back-end developer for
                creating the backend of an app for the client <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                APRJ Project - Developed the backend for a matrimonial app for
                jain community
                <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                Worked on: NodeJs, ExpressJs, MongoDB, Postman API, GitHub
                <br />
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="Projectbox">
              <center>
                <h4>Web Developer Intern</h4>
              </center>
              <center>
                <h3>NPR Supporting Services Pvt. Ltd.</h3>
              </center>
              <center>
                <h6>03/2020 - 04/2020</h6>
              </center>
              <p style={{ lineHeight: "100%" }}>
                <span style={{ color: "#ff0157", fontSize: "50px" }}>.</span>{" "}
                Part of front-end team for designing the UI in React Framework{" "}
                <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                Translate the different UI/UX part as assign from the design
                team into HTML and CSS
                <br />
                <span style={{ color: "#ff0157", fontSize: "50px" }}>
                  .
                </span>{" "}
                Worked on: HTML, CSS, Bootstrap, JavaScript, ReactJs, GitHub
                <br />
              </p>
              <div
                className="inputBox"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <a
                  href="https://drive.google.com/drive/folders/1pFqkJmfk2iv06qrBDwV5x8DwFctJ8OdP"
                  target="_blank"
                  rel="noreferrer"
                  className="btnn "
                >
                  View
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
