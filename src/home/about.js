import "../Home.css";
import about from "../homeImg/about.jpg";

function About() {
  return (
    <div className="Home">
      <div className="row">
        <div className="col50">
          <h2 className="titleText">
            <span>A</span>bout Me
          </h2>
          <p style={{ textAlign: "justify" }}>
            Hello, My name is Rahul. Currently, I am Software Engineer in
            Nagarro. I am a B.Tech. graduate in Computer Science and Engineering
            from Delhi Technical Campus, affiliated with GGSIPU. Skilled in
            ReactJS and Spring Boot, and passionate about solving challenging
            problems and also developing highly scalable, maintainable, and
            secure software. Always looking for a way to create and develop new
            innovative ideas and polish my skills.
            {/* Hello, My name is
            Rahul. Currently, I am Associate Software Engineer in Nagarro. I
            graduated in B.Tech. Computer Science and Engineering from Delhi
            Technical Campus affliated to GGSIPU, and my graduation is completed
            in July, 2022.
            <br />
            <br />
            I had internships with NPR Supporting Services Pvt. Ltd. where I
            learnt MERN stack and gained valuable industry knowledge. */}
            <br />
            {/* Currently, I want to secure a job of Software Developer Engineer. My long term goal is by gaining work
            experience of 05-07 years in the field of SDE. I wish to work in a senior position, contributing to the 
            betterment of my workplace and society. */}
          </p>
          <center>
            <a
              href="https://drive.google.com/file/d/1W-a63i43NxB__JmAFKlDDM-yZnz9dFMY/view"
              target="_blank"
              rel="noreferrer"
              className="linkcodebtn "
            >
              View My Resume
            </a>
          </center>
        </div>
        <div class="col50">
          <div class="imgBx">
            <img src={about} alt="profile pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
