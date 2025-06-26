import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const BannerSlider = () => {
  const [banners, setBanners] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/banners")
      .then(res => setBanners(res.data))
      .catch(err => console.log(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  const scroll = (direction) => {
    if (direction === "left") {
      sliderRef.current.slickPrev();
    } else {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="w-full overflow-hidden relative">
      <span
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-3 py-8 bg-white hover:bg-gray-300 cursor-pointer"
        onClick={() => scroll("left")}
      >
        <FaAngleLeft />
      </span>
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-3 py-8 bg-white hover:bg-gray-300 cursor-pointer"
        onClick={() => scroll("right")}
      >
        <FaAngleRight />
      </span>

      <Slider ref={sliderRef} {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="relative">
            <img src={banner.image} alt={banner.title} className="w-full" />
            <div className="absolute top-10 left-10 text-white">
              <h2 className="text-3xl font-bold">{banner.title}</h2>
              <p>{banner.description}</p>
              <button className="mt-2 bg-yellow-400 px-4 py-2 rounded">
                {banner.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
