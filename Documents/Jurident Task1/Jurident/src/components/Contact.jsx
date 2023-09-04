import "./Contact.css";
import { useState } from "react";
import bg from "../assets/contactbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enquiryType, setEnquiryType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any form submission logic here
    console.log("Form submitted with data:", {
      firstName,
      lastName,
      email,
      phoneNumber,
      enquiryType,
      message,
    });
  };
  return (
    <div>
      <div className="title">Contact Us</div>
      <div className="para">
        Any question or remarks? Just write us a message!
      </div>
      <div className="container">
        <div className="row">
          <div className="left">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-row">
                <div className="form-left">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    placeholder="John"
                  />
                </div>
                <div className="form-right">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-left">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Johndoe1234@gmail.com"
                  />
                </div>
                <div className="form-right">
                  <label htmlFor="mobilenumber">Mobile Number</label>
                  <input
                    type="tele"
                    id="mobilenumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    placeholder="+91 1234567890"
                  />
                </div>
              </div>

              <div className="form-row">
                <label
                  style={{ width: "100%", margin: "5px", marginBottom: "10px" }}
                >
                  Select Query
                </label>
                <div className="options">
                  <div>
                    <input
                      type="radio"
                      id="enquiryTypeGeneral"
                      name="enquiryType"
                      value="General"
                      checked={enquiryType === "General"}
                      onChange={() => setEnquiryType("General")}
                      required
                    />
                    <label htmlFor="enquiryTypeGeneral">General</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="enquiryTypeSupport"
                      name="enquiryType"
                      value="Support"
                      checked={enquiryType === "Support"}
                      onChange={() => setEnquiryType("Support")}
                      required
                    />
                    <label htmlFor="enquiryTypeSupport">Support</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="enquiryTypeCollaboration"
                      name="enquiryType"
                      value="Collaboration"
                      checked={enquiryType === "Collaboration"}
                      onChange={() => setEnquiryType("Collaboration")}
                      required
                    />
                    <label htmlFor="enquiryTypeCollaboration">
                      Collaboration
                    </label>
                  </div>
                  
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="write your message here"
                />
              </div>
              <div className="form-row">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
          <div className="right">
            <img src={bg} />
            <div className="details">
              <h2>Contact Information</h2>
              <p>Say something to chat!</p>
              <div className="icons">
                <p>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#ffffff", margin: "0px 10px" }}
                  />{" "}
                  xxx-xxx-xxxx
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#ffffff", margin: "0px 10px" }}
                  />
                  example@example.com
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#ffffff", margin: "0px 10px" }}
                  />{" "}
                  No. 5/1, Durga Mata Mandir Road, Moti Nagar 110015 New Delhi,
                  India
                </p>
              </div>
              <div className="social-container">
                <div className="social">
                  <Facebook />
                </div>
                <div className="social">
                  <Twitter />
                </div>
                <div className="social">
                  <Instagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
