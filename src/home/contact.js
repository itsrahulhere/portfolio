import '../Home.css';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  //alert functionality
  const [status, setStatus] = React.useState(false);

  function changeMode() {
    setStatus(true);
  }

  //email functionality
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zl7gpvg",
        "template_45vzz1h",
        form.current,
        "INU2SBysHC2qsHrOX"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setTimeout(()=>{
            e.target.reset();
            setStatus(false);
          }, 3500)
         
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputBox">
            <input type="text" placeholder="Name" name="user_name" />
          </div>
          <div className="inputBox">
            <input type="text" placeholder="Email" name="user_email" />
          </div>
          <div className="inputBox">
            <textarea placeholder="Message" name="message"></textarea>
          </div>
          <div className="inputBox oneline">
            <input type="submit" onClick={changeMode} placeholder="Send" value="Send" />
          </div>
          {
            status  ? <div className="inputBox oneline btn-sent">
                        <input type="button" placeholder="Message Sent" value="Message Sent!" />
                      </div>
                    : null
          }
        </form>
      </div>
    </div>
  );
}

export default Contact;