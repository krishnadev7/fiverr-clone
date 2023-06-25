import React from "react";
import Slider from "infinite-react-carousel";

function Slide({ children, slidesToShow, arrowsScroll, pSlider }) {
  return (
    <div className="flex justify-center pt-24 pb-0">
      <div className="w-11/12">
        <h1 className="pb-6 text-3xl font-bold">
          {pSlider ? "Inspiring work made on Fiverr" : "Popular services"}
        </h1>
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
