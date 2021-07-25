import '../Home.css';
import about from "../homeImg/about.jpg";

function About() {
  return (
    <div className="Home">
     <div className="row">
        <div className="col50">
          <h2 className="titleText"><span>A</span>bout Me</h2>
          <p>Hello, My name is Rahul. Currently, I am pursuing B.Tech in Computer Science and Engineering 
            from Delhi Technical Campus affliated to GGSIPU, and my graduation is about to complete in next year.<br/><br/>
            
            I had internships with NPR Supporting Services Pvt. Ltd. where I learnt MERN stack and gained valuable industry knowledge.
            
            <br/><br/>
           Currently, I want to secure a job of Software Developer Engineer. My long term goal is by gaining work
            experience of 05-07 years in the field of SDE. I wish to work in a senior position, contributing to the 
            betterment of my workplace and society.
          </p>
          <center>
          <a href="https://drive.google.com/file/d/1-OLsiozgb8lMFhjFymkDnpuJMfZ-SWaC/view?usp=sharing" 
             target="_blank" className="linkcodebtn ">View My Resume</a>
</center>
          
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
