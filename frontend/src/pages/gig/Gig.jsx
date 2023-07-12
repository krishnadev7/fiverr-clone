import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import stars from "../../assets/img/star.png";
import { Slider } from "infinite-react-carousel";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">
            <div className="hover:bg-slate-100 p-2 rounded-full">
              <Link to="/">
                <HiOutlineHome />{" "}
              </Link>
            </div>
            <span className="text-gray-300">/</span> Graphics & Design
          </span>

          <h1>I will create quick custom ai art</h1>

          <div className="user">
            <img
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>John doe</span>
            <div className="stars">
              <img src={stars} alt="" srcset="" />
              <img src={stars} alt="" srcset="" />
              <img src={stars} alt="" srcset="" />
              <img src={stars} alt="" srcset="" />
              <img src={stars} alt="" srcset="" />
              <span>5</span>
            </div>
          </div>

          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About this gig</h2>
          <p>
            I will create 1, 3, or 7 fully customized images (based on your
            descriptions) using a powerful AI tool called Midjourney You can
            send me a photo, a detailed description, or simply just send me a
            message and we can discuss your idea. It is all up to your
            imagination + my skills and with that - the possibilities are
            endless. I am flexible and committed to creating an optimal result
            for your project
          </p>

          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>

            <div className="info">
              <span>John doe</span>
              <div className="stars">
                <img src={stars} alt="" srcset="" />
                <img src={stars} alt="" srcset="" />
                <img src={stars} alt="" srcset="" />
                <img src={stars} alt="" srcset="" />
                <img src={stars} alt="" srcset="" />
                <span>5</span>
              </div>
              <button>Contact Me</button>
            </div>
          </div>

          <div className="box">
            <div className="items">
              <div className="item"></div>
            </div>
            <p>
              Hi there & welcome to my shop. I'm ai_lani - a digital artist who
              creates fully customizable images based on your specific needs and
              vision. You send me the photo or description, and I will present
              to you a one of a kind - AI generated piece of art. If you have
              any questions, send me a message anytime :)
            </p>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Gig;
