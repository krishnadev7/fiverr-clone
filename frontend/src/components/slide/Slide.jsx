import React from "react";
import Slider from 'infinite-react-carousel';


function Slide({children,slidesToShow,arrowsScroll}) {
  return (
    <div className="flex justify-center pt-24 pb-0">
      <div className="w-11/12">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} >
         {children}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
