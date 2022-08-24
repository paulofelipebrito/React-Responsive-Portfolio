import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useTheme } from "../../context/ThemeContext";
import "react-dotenv";
import Spinner from "../Spinner";

const Contact = () => {
 // context
 const { theme } = useTheme();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef<HTMLFormElement | null>(null);
  const [done, setDone] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result: { text: string; }) => {
          console.log(result.text);
          setDone(true);
          setIsLoading(false);
          setUserName('');
          setUserEmail('');
          setMessage('');
        },
        (error: { text: string; }) => {
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: theme === "Dark" ?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name" value={userName} onChange={(e) => setUserName(e.target.value)}/>
          <input type="email" name="user_email" className="user" placeholder="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
          <textarea name="message" className="user" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}/>
          <button type="submit" className="button">Send</button>
          <span>{isLoading && <Spinner />}</span>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
