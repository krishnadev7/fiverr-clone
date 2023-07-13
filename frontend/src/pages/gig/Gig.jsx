import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import stars from "../../assets/img/star.png";
import likeImg from "../../assets/img/like.png";
import dislikeImg from "../../assets/img/dislike.png";
import { Slider } from "infinite-react-carousel";

const Gig = () => {
  return (
    <div className="gig flex justify-center">
      <div className="container w-11/12 pt-8 pb-8 flex gap-12">
        <div className="left flex flex-col gap-5">
          <span className="breadcrumbs flex items-center gap-4 font-normal text-sm text-gray-900">
            <div className="hover:bg-slate-100 p-2 rounded-full ">
              <Link to="/">
                <HiOutlineHome />{" "}
              </Link>
            </div>
            <span className="text-gray-300">/</span> Graphics & Design
          </span>

          <h1>I will create quick custom ai art</h1>

          <div className="user flex items-center gap-2">
            <img
              className="w-8 h-8 rounded-2xl"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="text-sm font-medium">John doe</span>
            <div className="stars flex items-center gap-1">
              <img className="w-4 h-4" src={stars} alt="" srcset="" />
              <img className="w-4 h-4" src={stars} alt="" srcset="" />
              <img className="w-4 h-4" src={stars} alt="" srcset="" />
              <img className="w-4 h-4" src={stars} alt="" srcset="" />
              <img className="w-4 h-4" src={stars} alt="" srcset="" />
              <span className="text-yellow-500">5</span>
            </div>
          </div>

          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              className="max-h-96 object-contain"
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              className="max-h-96 object-contain"
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              className="max-h-96 object-contain"
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2 className="font-normal">About this gig</h2>
          <p className="font-light text-slate-600 leading-6">
            I will create 1, 3, or 7 fully customized images (based on your
            descriptions) using a powerful AI tool called Midjourney You can
            send me a photo, a detailed description, or simply just send me a
            message and we can discuss your idea. It is all up to your
            imagination + my skills and with that - the possibilities are
            endless. I am flexible and committed to creating an optimal result
            for your project
          </p>

          <div className="seller mt-12 flex flex-col gap-5">
            <h2>About the seller</h2>
            <div className="user flex items-center gap-5">
              <img
                className="w-24 h-24 rounded-3xl object-cover"
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />

              <div className="info flex flex-col gap-2">
                <span>John doe</span>
                <div className="stars flex items-center gap-1">
                  <img className="w-4 h-4" src={stars} alt="" srcset="" />
                  <img className="w-4 h-4" src={stars} alt="" srcset="" />
                  <img className="w-4 h-4" src={stars} alt="" srcset="" />
                  <img className="w-4 h-4" src={stars} alt="" srcset="" />
                  <img className="w-4 h-4" src={stars} alt="" srcset="" />
                  <span className="text-yellow-500">5</span>
                </div>
                <button className="bg-white rounded-md border border-solid border-gray-500 p-2 cursor-pointer">
                  Contact Me
                </button>
              </div>
            </div>

            <div className="box border border-solid border-gray-300 rounded-md p-5 mt-5">
              <div className="items flex flex-wrap justify-between">
                <div className="item w-72 flex flex-col gap-2 mb-5">
                  <span className="title  font-light">From </span>
                  <span className="desc">USA</span>
                </div>
                <div className="item w-72 flex flex-col gap-2 mb-5">
                  <span className="title font-light">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item w-72 flex flex-col gap-2 mb-5">
                  <span className="title font-light">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item w-72 flex flex-col gap-2 mb-5">
                  <span className="title font-light">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item w-72 flex flex-col gap-2 mb-5">
                  <span className="title font-light">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr className="h-0 border border-solid border-gray-300 mb-5"/>
              <p className="font-light text-slate-600 leading-6">
                Hi there & welcome to my shop. I'm ai_lani - a digital artist
                who creates fully customizable images based on your specific
                needs and vision. You send me the photo or description, and I
                will present to you a one of a kind - AI generated piece of art.
                If you have any questions, send me a message anytime :)
              </p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars flex items-center gap-1">
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <span className="text-yellow-500">5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src={likeImg} alt="" />
                <span>Yes</span>
                <img src={dislikeImg} alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars flex items-center gap-1">
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <span className="text-yellow-500">5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src={likeImg} alt="" />
                <span>Yes</span>
                <img src={dislikeImg} alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars flex items-center gap-1">
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <img className="w-4 h-4" src={stars} alt="" srcset="" />
                <span className="text-yellow-500">5</span>
              </div>
              <p>
                Amazing work! Communication was amazing, each and every day he
                sent me images that I was free to request changes to. They
                listened, understood, and delivered above and beyond my
                expectations. I absolutely recommend this gig, and know already
                that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src={likeImg} alt="" />
                <span>Yes</span>
                <img src={dislikeImg} alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex-1"></div>
      </div>
    </div>
  );
};

export default Gig;
