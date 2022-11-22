import '../Home.css';
import about from "../homeImg/about.jpg";

function About() {
  return (
    <div className="Home">
     <div className="row">
        <div className="col50">
          <h2 className="titleText"><span>A</span>bout Me</h2>
          <p style={{ textAlign: 'justify' }}>Hello, My name is Rahul. Currently, I am Associate Software Engineer in Nagarro. I graduated in B.Tech. Computer Science and Engineering 
            from Delhi Technical Campus affliated to GGSIPU, and my graduation is completed in July, 2022.<br/><br/>
            
            I had internships with NPR Supporting Services Pvt. Ltd. where I learnt MERN stack and gained valuable industry knowledge.
            
            <br/><br/>
           Currently, I want to secure a job of Software Developer Engineer. My long term goal is by gaining work
            experience of 05-07 years in the field of SDE. I wish to work in a senior position, contributing to the 
            betterment of my workplace and society.
          </p>
          <center>
          <a href="https://drive.google.com/file/d/1MJJD5h2H4A7jBYEvVKWkVm6-C82WjMps/view" 
             target="_blank" rel="noreferrer" className="linkcodebtn ">View My Resume</a>
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
