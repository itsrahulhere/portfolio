import '../Home.css';
import about from "../homeImg/about.jpg";

function About() {
  return (
    <div className="Home">
     <div className="row">
        <div className="col50">
          <h2 className="titleText"><span>A</span>bout Me</h2>
          <p>Google Summer of Code is a global program focused on bringing
           more student developers into open source software development. Students work with an open source organization on a 10 week
           programming project during their break from school.<br/><br/>
           Organically we have trained software engineers and youth and allow them to present their ideas that can transform their career and living standards.

            The Objective of the company is to provide Extensive support services broadly in IT Sector, as we are having In-house experts for the same.
          </p>
        </div>
        <div class="col50">
          <div class="imgBx">
            <img src={about} alt="image can't load" />
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;
