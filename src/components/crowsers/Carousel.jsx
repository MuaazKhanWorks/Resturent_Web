import { useEffect } from "react";
import { useState } from "react";
import "./Carousel.css";

const countries = [
  {
    image: 'https://img.freepik.com/premium-photo/whole-roasted-chicken-rosemary-tomato-lemon-wooden-cutting-board-baked-chicken-grilled-barbecue-delicious-food-dining-table-holiday-celebrate_73523-3045.jpg',
    title: "Chicken",
  },
  {
    image: 'https://media.istockphoto.com/id/612223406/photo/thanksgiving-feast.jpg?s=612x612&w=0&k=20&c=N52x1xyDQpPWm-oH9YsJHeNEzth16LPQ8IKLO7ZFvWU=',
    title: "Dray fruite",
  },
  {
    image: 'https://ychef.files.bbci.co.uk/976x549/p04tx3m6.jpg',
    title: "Fast",
  },
  {
    image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: "Burger and Fries",
  },
  {
    image: "https://www.digitalphotomentor.com/photography/2015/09/C-Texture-with-light-copy-750x536.jpg",
    title: "Khotay ki Gosht",
  },
];


function Carousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    setCurrent(current === countries.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? countries.length - 1 : current - 1);
  };
  
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {countries.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index == current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.image} alt="" />
              <div className="card_overlay">
                <h2 className="card_title">{image.title}</h2>
              </div>
            </div>
          );
        })}
        {/* <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div> */}
        <div className="carousel_pagination">
          {countries.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
