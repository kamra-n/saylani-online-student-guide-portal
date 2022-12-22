import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { sliderImageOne, sliderImageTwo, sliderImageThree } from "../../assets";

export default function HeroSection() {
  const IMAGE_DATA = [
    {
      id: 1,
      img: sliderImageOne,
    },
    {
      id: 2,
      img: sliderImageTwo,
    },
    {
      id: 3,
      img: sliderImageThree,
    },
  ];

  type MapData = {
    id: number;
    img: string;
  };

  const slidesDATA = IMAGE_DATA.map((v: MapData) => {
    return (
      <div key={v.id} className="rounded-lg">
        <img
          src={v.img}
          alt="image"
          className="max-h-full max-w-full justify-items-stretch p-2"
        />
      </div>
    );
  });

  const sliderRef = useRef<any>(null);
  console.log(sliderRef.current);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // dots: true,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          // dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <div className="w-full flex">
      <div className="w-1/2 lg:px-4 lg:pt-4 xl:pl-8 x:pr-4 xl:pt-20 relative hidden lg:block">
        <h2 className="lg:text-[35px] leading-[50px] w-full lg:max-w-[510px] tracking-wide xl:text-[38px] ">
          Donate us to support
          <br />
          <span className="text-[#8dc63f]">flood-affected</span>
          <br />
          families in Pakistan
        </h2>
        <h3 className="lg:text-[22px] xl:text-[24px] pt-5 leading-6">
          We are distributing |{" "}
          <span className="text-[#0d6db7]">Cooked Food</span>
        </h3>
        <p className="text-justify pt-4 lg:text-[16px] ">
          Saylani Welfare is on the ground and already working with local
          communities to assess how best to support affected families, who
          urgently need food, Ration, shelter, bedding, Medical Facility and
          hygiene items.
        </p>

        <div className="absolute flex bottom-0 right-[48px] xl:pb-9">
          <BsArrowLeft
            className="lg:text-6xl xl:text-6xl cursor-pointer"
            onClick={() => sliderRef.current.slickPrev()}
          />
          <BsArrowRight
            className="lg:text-7xl xl:text-8xl cursor-pointer"
            onClick={() => sliderRef.current.slickNext()}
          />
        </div>
      </div>
      <div className=" w-full lg:w-1/2">
        <Slider ref={sliderRef} {...settings}>
          {slidesDATA}
        </Slider>
      </div>
    </div>
  );
}
