import React from "react";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom/dist";
function Contact() {
  const navigate = useNavigate();
  return (
    <div className="Contact">
      <div className="contact">
        <div className="contact_r">
          <button onClick={() => navigate("/")}>Home</button>
          <span>/</span>
          <button>Contact</button>
        </div>
        <div className="center_c">
          <div className="left_c">
            <div className="one_c">
              <div className="btn_c">
                <button>
                  <BiPhone size="25px" />
                </button>
                <p>Call To Us</p>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <span>Phone: +8801611112222</span>
              <hr />
            </div>
            <div className="two_c">
              <div className="btn_cc">
                <button>
                  <AiOutlineMail size="20px" />
                </button>
                <p>Write To US</p>
              </div>
              <p>
                Fill out our form and we will contact <br /> you within 24
                hours.
              </p>
              <span>Emails: customer@exclusive.com</span>
              <span>Emails: customer@exclusive.com</span>
            </div>
          </div>
          <div className="right_c">
            <div className="flex">
              <div className="input_thee">
                <input type="text" placeholder="Your Name *" />
                <input type="email" placeholder="Your Email *" />
                <input type="number" placeholder="Your Phone *" />
              </div>
              <div className="input_big">
                <input type="text" placeholder="Your Massages" />
              </div>
              <button>Your Massage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
