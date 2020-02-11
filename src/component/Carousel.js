import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Carousel = () => {
  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    style: {
      textAlign: "center",
      height: "160px",
      background: "#364d79",
      marginBottom: "30px"
    }
  }
  return (
    <Slider {...setting}>
        <div>
          <h1>Banner 1</h1>
        </div>
        <div>
          <h1>Banner 2</h1>
        </div>
        <div>
          <h1>Banner 3</h1>
        </div>
      </Slider>
  )
}

export default Carousel