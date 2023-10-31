import React from "react";
import { LiaTelegram } from "react-icons/lia";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { } from "react-icons/ai";
// import apple from "../assets/footer/AppStore.png";
// import googplay from "../assets/footer/GooglePlay.png";
// import qr from "../assets/footer/Qr Code.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_1">
        <div className="one">
          <p>Exclusive</p>
          <span> Subscribe</span>
          <b>Get 10% off your first order</b>
          <div className="input_button">
            <input type="text" placeholder="Enter your email" />
            <button>
              <LiaTelegram size={24} />
            </button>
          </div>
        </div>
        <div className="two">
          <p>Support</p>
          <span>
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </span>
          <span>exclusive@gmail.com</span>
          <span>+88015-88888-9999</span>
        </div>
        <div className="thee">
          <p>Account</p>
          <span>My Account</span>
          <span>Login / Register</span>
          <span>Cart</span>
          <span>Wishlist</span>
          <span>Shop</span>
        </div>
        <div className="four">
          <p>Quick Link</p>
          <span>Privacy Policy</span>
          <span>Terms Of Use</span>
          <span>FAQ</span>
          <span> Contact</span>
        </div>
        <div className="five">
          <p>Download App</p>
          <span>Save $3 with App New User Only</span>
          <div className="rasm">
            <div className="ong">
              {/* <img src={qr} alt="" /> */}
            </div>
            <div className="chap">
              {/* <img src={googplay} alt="" /> */}
              {/* <img src={apple} alt="" /> */}
            </div>
          </div>
          <div className="icon">
            <button>
              <BiLogoFacebook size={24} />
            </button>
            <button>
              <AiOutlineTwitter size={24} />
            </button>
            <button>
              <AiOutlineInstagram size={24} />
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="p">
        <button></button>
        <p>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5003 18.3334C15.1027 18.3334 18.8337 14.6025 18.8337 10.0001C18.8337 5.39771 15.1027 1.66675 10.5003 1.66675C5.89795 1.66675 2.16699 5.39771 2.16699 10.0001C2.16699 14.6025 5.89795 18.3334 10.5003 18.3334Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.0003 8.14823C13.0003 8.14823 11.9709 6.66675 10.2552 6.66675C8.53954 6.66675 7.16699 8.14823 7.16699 10.0001C7.16699 11.8519 8.53954 13.3334 10.2552 13.3334C11.9709 13.3334 13.0003 11.8519 13.0003 11.8519"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
