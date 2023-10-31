import React from "react";
import girl from "../assets/About/qizlar.png";
import shop from "../assets/About/Services.png";
import boy from "../assets/About/boy.png";
import women from "../assets/About/image 51.png";
import man from "../assets/About/man.png";
import one from "../assets/About/Sevise.png";
import two from "../assets/About/Services (1).png";
import thee from "../assets/About/Services (2).png";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function About() {
  return (
    <div className="About">
      <div className="section1">
        <div className="ikki">
          <div className="left_s">
            <p>Our Story</p>
            <span>
              Launced in 2015, Exclusive is South Asia’s premier online shopping{" "}
              <br />
              makterplace with an active presense in Bangladesh. Supported{" "}
              <br /> by wide range of tailored marketing, data and service
              solutions, <br /> Exclusive has 10,500 sallers and 300 brands and
              serves 3 <br /> millioons customers across the region.{" "}
            </span>
            <span>
              Exclusive has more than 1 Million products to offer, growing at a{" "}
              <br />
              very fast. Exclusive offers a diverse assotment in categories{" "}
              <br />
              ranging from consumer.
            </span>
          </div>
          <div className="right_s">
            <img src={girl} alt="" />
          </div>
        </div>
        <div className="bottom_s">
          <div className="s_one">
            <img src={shop} alt="" />
            <p>10.5k </p>
            <span>Sallers active our site</span>
          </div>
          <div className="s_one">
            <img src={shop} alt="" />
            <p>33k</p>
            <span>Mopnthly Produduct Sale</span>
          </div>{" "}
          <div className="s_one">
            <img src={shop} alt="" />
            <p>45.5k </p>
            <span>Customer active in our site</span>
          </div>{" "}
          <div className="s_one">
            <img src={shop} alt="" />
            <p>25k </p>
            <span>Anual gross sale in our site</span>
          </div>
        </div>
      </div>
      <div className="section_2">
        <div className="img_2">
          <div className="one_2">
            <div className="Img">
              <img src={boy} alt="" />
            </div>
            <div className="Text">
              <p>Tom Cruise</p>
              <span>Founder & Chairman</span>
              <div className="btns">
                <button>
                  <AiOutlineTwitter size={24} />
                </button>
                <button>
                  <AiOutlineInstagram size={24} />
                </button>
                <button>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="one_2">
            <div className="Img">
              <img src={women} alt="" />
            </div>
            <div className="Text">
              <p>Emma Watson</p>
              <span>Managing Director</span>
              <div className="btns">
                <button>
                  <AiOutlineTwitter size={24} />
                </button>
                <button>
                  <AiOutlineInstagram size={24} />
                </button>
                <button>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="one_2">
            <div className="Img">
              <img src={man} alt="" />
            </div>
            <div className="Text">
              <p>Will Smith</p>
              <span>Product Designer</span>
              <div className="btns">
                <button>
                  <AiOutlineTwitter size={24} />
                </button>
                <button>
                  <AiOutlineInstagram size={24} />
                </button>
                <button>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="img_t">
          <div className="bir">
            <img src={one} alt="" />
            <p>FREE AND FAST DELIVERY</p>
            <span>Free delivery for all orders over $140</span>
          </div>
          <div className="bir">
            <img src={two} alt="" />
            <p>24/7 CUSTOMER SERVICE</p>
            <span>Friendly 24/7 customer support</span>
          </div>
          <div className="bir">
            <img src={thee} alt="" />
            <p>MONEY BACK GUARANTEE</p>
            <span>We reurn money within 30 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
