import '../Home.css';
//import about from "../homeImg/about.jpg";

function Contact() {
  return (
    <div className="Home">
    <div className="contact" id="contact">
      <div className="title">
        <h2 className="titleText"><span>C</span>ontact Me</h2>
        <p>Contact me, feedback and any quiry.</p>
      </div>
    </div>
    <div className="contactForm">
      <h3>Send Message</h3>
      <div className="inputBox">
        <input type="text" placeholder="Name" />
      </div>
      <div className="inputBox">
        <input type="text" placeholder="Email" />
      </div>
      <div className="inputBox">
        <textarea placeholder="Message"></textarea>
      </div>
      <div className="inputBox">
        <input type="submit" placeholder="Send" />
      </div>

    </div>
    </div>
  );
}

export default Contact;