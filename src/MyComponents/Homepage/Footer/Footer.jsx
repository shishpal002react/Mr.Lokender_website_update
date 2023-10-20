import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../../../Images/d52.png";
import img from "../../../Images/d54.png";
import img2 from "../../../Images/d56.png";
import img3 from "../../../Images/d72.png";
import img4 from "../../../Images/d73.png";
import img5 from "../../../Images/d74.png";

const Footer = () => {
  return (
    <>
      <hr className="w-full text-white" />
      <img src={img2} style={{ width: "100%", margin: "0", marginTop: "3%" }} />
      <div className="container-fluid flex gap-15 ml-1 mt-1 bg-white p-1 text-black mx-auto footcont">
        <div className="w-2/5 space-x-4  space-y-6 footitm">
          <h3
            style={{ fontWeight: "700", fontSize: "24px", marginLeft: "16px" }}
          >
            About
          </h3>
          <p>
            Lorem ipsum dolor, sit amet <br />
            consectetur adipisicing elit. Provident, odio. efrgbrefg
            tgrbhsrtgtrgtr fgbt5grtgrsfgrefd tgrfdc erfrefggrtrg trgfdgrtfgbtr
            trgfd
          </p>
          <div className="flex space-x-4 text-2xl">
            <FaFacebook style={{ color: "blue" }} />
            <FaInstagram style={{ color: "green" }} />
            <FaLinkedin />
          </div>
        </div>
        <div className=" md:flex flex-col  w-1/5  space-y-6 footitm">
          <h2 className="text-xl font-medium">Useful Links</h2>
          <ul className="space-y-2">
            <li>About</li>
            <li>FAQ</li>
            <li>Shipping Policy</li>
            <li>Cancellation Policy</li>
            <li>Return & Refund Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className=" md:flex flex-col  w-1/5 space-y-6 footitm">
          <h2 className="text-xl font-medium">Account</h2>
          <ul className="space-y-2">
            <li>My Account </li>
            <li> My Wallet</li>
            <li>Wishlist</li>
            <li>Orders</li>
            <li>Track Orders</li>
            <li>Trucks & Exchange</li>
            <li>Become A Seller</li>
          </ul>
        </div>
        <div className=" md:flex flex-col  w-1/5 space-y-6 footitm">
          <h2 className="text-xl font-medium">Shopping</h2>
          <ul className="space-y-2">
            <li>Men</li>
            <li>Women</li>
            <li>New Arrival</li>
            <li>Sale</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className=" md:flex flex-col  w-1/5 space-y-6 footitm">
          <h2 className="text-xl font-medium">Download Our App</h2>
          <ul className="space-y-2">
            <button
              style={{
                backgroundColor: "#333",
                width: "80%",
                height: "60px",
                color: "#fff",
                borderRadius: "12px",
              }}
            >
              <img src={img4} alt="" style={{ width: "100%" }} />
            </button>
            <button
              style={{
                backgroundColor: "#333",
                width: "80%",
                height: "60px",
                color: "#fff",
                borderRadius: "12px",
              }}
            >
              <img src={img3} alt="" style={{ width: "100%" }} />
            </button>
          </ul>
        </div>
      </div>

      <hr className="w-full text-white" />
      {/*<img src={img} style={{ width: "100%", marginLeft: "0" }} />*/}
      <div className="flex justify-between items-center text-white bg-black  p-4 footcont2">
        <div className="flex justify-between flex-wrap items-center text-white w-1/2 p-1 footitm2">
          <div className="flex gap-2">
            <i
              class="fa-solid fa-bag-shopping mt-1"
              style={{ color: "#ffbb03" }}
            ></i>
            <p>Become a Seller</p>
          </div>
          <div className="flex gap-2">
            <i
              class="fa-solid fa-bag-shopping mt-1"
              style={{ color: "#ffbb03" }}
            ></i>
            <p>Coupons</p>
          </div>
          <div className="flex gap-2">
            <i
              class="fa-sharp fa-solid fa-circle-question mt-1"
              style={{ color: "#ffbb03" }}
            ></i>
            <p>Help Center</p>
          </div>
          <div>
            <p>@2018-23 shubharambh99.com</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-white w-1/2 footitm2">
          <img className="footimg" src={img5} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
