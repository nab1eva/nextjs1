"use client";
import Image from "next/image";
import Slider from "react-slick";

const Carusel = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {products?.map((pr) => {
        if (pr !== null) {
          return (
            <div className="slider" key={pr}>
              <Image
                src={pr?.images?.url}
                alt="product img"
                height={200}
                width={300}
                style={{
                  objectFit: "cover",
                  height: "280px",
                  width: "100%",
                  borderRadius: "20px 20px 0 0",
                }}
              />
              <p className="slider-text">{pr?.title}</p>
            </div>
          );
        }
      })}
    </Slider>
  );
};

export default Carusel;
