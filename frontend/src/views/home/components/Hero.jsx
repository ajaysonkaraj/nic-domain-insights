// import React from 'react'
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import c1 from "../../../assets/img/home/c1.jpg";
import c2 from "../../../assets/img/home/c2.jpg";
import c3 from "../../../assets/img/home/c3.jpg";

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    // autoplaySpeed: 3000,
    cssEase: "linear",
    
  };
  return (
   
    <div >
      <div className="slider-container">
        <Slider {...settings} >
          <div>
            <img src={c1} alt="" className="h-[20rem] w-full rounded-md"/>
          </div>
          <div>
            <img src={c2} alt="" className="h-[20rem] w-full rounded-md"/>
          </div>
          <div>
            <img src={c3} alt="" className="h-[20rem] w-full rounded-md"/>
          </div>
          <div>
            <img src={c1} alt="" className="h-[20rem] w-full rounded-md"/>
          </div>
          <div>
            <img src={c2} alt="" className="h-[20rem] w-full rounded-md"/>
          </div>
          <div>
            <img src={c3} alt="" className="h-[20rem] w-full rounded-md"/>
          </div>
        </Slider>
      </div>
    </div>
    
  );
}

// export default Hero
