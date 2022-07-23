import React, { Component, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import main from "../images/main.png";
import turtleChip from "../images/turtleChip.png";
import btsCoffee from "../images/btsCoffee.png";
import cornChip from "../images/cornChip.png";
import gummy from "../images/gummy.png";
import shrimpChip from "../images/shrimpChip.png";
import almond from "../images/almond.png";
import pepero from "../images/pepero.png";
import chac1 from "../images/chac1.png";
import chac2 from "../images/chac2.png";
import chac3 from "../images/chac3.png";
import chac4 from "../images/chac4.png";
import chac5 from "../images/chac5.png";
import chac6 from "../images/chac6.png";
import mask1 from "../images/mask1.png";
import mask2 from "../images/mask2.png";
import mask3 from "../images/mask3.png";
import feature1 from "../images/feature1.jpg";
import feature2 from "../images/feature2.jpg";
import feature3 from "../images/feature3.jpg";
import review_bg from "../images/review_bg.png";
import review_highlight from "../images/review_highlight.png";
import order1 from "../images/order1.png";
import order2 from "../images/order2.jpg";
import order3 from "../images/order3.jpg";
import order4 from "../images/order4.jpg";
import order5 from "../images/order5.jpg";
import order6 from "../images/order6.jpg";
import order7 from "../images/order7.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery4 from "../images/gallery4.jpg";
import "../styles/Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [orderDetail, setOrderDetail] = useState("detail");
  const featuresRef = useRef<null | HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    featuresRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  const reviews: { user: string; review: string }[] = [
    {
      user: "Emel**",
      review:
        "Super box, bought for a birthday. It was complete and offered a lot of items, some classic, some more original but all perfect for those who want to taste a piece of Korea. I recommend!",
    },
    {
      user: "Joha**",
      review:
        "Super quality and very nice extras. Expectations exceeded. A good mix. My sister was thrilled. I immediately ordered the next box for me :)",
    },
    {
      user: "Chri**",
      review:
        "Found the box just great. There were some snacks that I hadn't had for ages, and also some that I didn't know at all. Was really a great mix of different things.",
    },
    {
      user: "paul**",
      review:
        "I highly recommend! I thought there was going to have less food but when I opened the box there were plenty. I am very happy with my purchase!",
    },
    {
      user: "Veer**",
      review:
        "I ordered this box for a friend and she loved it! The box was well-filled with lots of different items:) I would definitely recommend this item!",
    },
    {
      user: "Hanz**",
      review:
        "My friend absolutely LOVE this box of yummy snacks so thank you very very much!! 🥰💖🥰💖",
    },
    {
      user: "Lorn**",
      review:
        "Bought as a Christmas present for a friend who has let me know she thoroughly enjoyed all the items from the box! Thanks again",
    },
  ];
  const orderImg = [order1, order2, order3, order4, order5, order6, order7];

  const navLeftBtn = document.querySelectorAll<HTMLElement>(
    ".product-right-detail-btn"
  );
  const navLeftIndicator = document.getElementById(
    "product-right-detail-btn-indicator"
  );

  navLeftBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => showIndicator(e))
  );

  const showIndicator = (e: any) => {
    navLeftBtn.forEach((btn) => (btn.style.color = "var(--main-purple)"));
    e.currentTarget.style.color = "white";
    navLeftIndicator!.style.left = e.currentTarget.offsetLeft + "px";
    navLeftIndicator!.style.top = e.currentTarget.offsetTop + "px";
    navLeftIndicator!.style.width = e.currentTarget.offsetWidth + "px";
  };

  return (
    <div>
      <section className="main">
        <div className="mainImg-container">
          <img src={main} alt="main" className="mainImg" />
          <button className="main-scrollBtn" onClick={handleScroll}>
            Scroll Down
          </button>
        </div>
        <img
          src={turtleChip}
          alt="turtleChip"
          className="absolute front turtleChip"
        />
        <img
          src={btsCoffee}
          alt="btsCoffee"
          className="absolute front btsCoffee"
        />
        <img src={gummy} alt="gummy" className="absolute  gummy" />
        <img
          src={cornChip}
          alt="cornChip"
          className="absolute front cornChip"
        />
        <img
          src={shrimpChip}
          alt="shrimpChip"
          className="absolute front shrimpChip"
        />
        <img src={almond} alt="almond" className="absolute  almond" />
        <img src={pepero} alt="pepero" className="absolute front pepero" />

        <img src={chac1} alt="chac1" className="absolute chac1" />
        <img src={chac2} alt="chac2" className="absolute front chac2" />
        <img src={chac3} alt="chac3" className="absolute  front chac3" />
        <img src={chac4} alt="chac4" className="absolute front chac4" />
        <img src={chac5} alt="chac5" className="absolute front chac5" />
        <img src={chac6} alt="chac6" className="absolute front chac6" />

        <img src={mask1} alt="mask1" className="absolute  mask1" />
        <img src={mask2} alt="mask2" className="absolute  mask2" />
        <img src={mask3} alt="mask3" className="absolute front mask3" />
      </section>
      <section className="features" ref={featuresRef}>
        <div className="feature">
          <div className="feature-text">
            <h3>01</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img src={feature1} alt="feature" />
        </div>
        <div className="feature feature-reverse">
          <img src={feature2} alt="feature" />

          <div className="feature-text">
            <h3>02</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-text">
            <h3>03</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <img src={feature3} alt="feature" />
        </div>
      </section>
      <section className="review">
        <img src={review_bg} alt="review_bg" className="review_bg" />
        <div className="review_container">
          <h6>Reviews</h6>
          <img src={review_highlight} alt="review_highlight" />
          <div>
            <Slider {...settings}>
              <div>
                <p>
                  Super box, bought for a birthday. It was complete and offered
                  a lot of items, some classic, some more original but all
                  perfect for those who want to taste a piece of Korea. I
                  recommend!
                </p>
                <span>Emeline</span>
              </div>
              {reviews.map((el) => (
                <div>
                  <p>{el.review}</p>
                  <span>{el.user}</span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section className="product">
        <div>
          <Slider {...settings}>
            {orderImg.map((el) => (
              <div>
                <img src={el} alt="el" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="product-right">
          <h1>Gwaja Gift Box</h1>
          <span>
            Want to experience Korea but not sure what to try out?
            <br />
            Need a Gift for your K-pop, K-drama obsessed friend/family?
          </span>
          <div className="product-right-price">
            <h3>€27.30</h3>
            <button
              onClick={() => {
                navigate("/order");
              }}
            >
              Get Gwaja Box
            </button>
          </div>
          <div className="product-right-detail">
            <div>
              <div id="product-right-detail-btn-indicator"></div>
              <button
                className="product-right-detail-btn detail"
                onClick={() => {
                  setOrderDetail("detail");
                }}
                style={{ color: "white" }}
              >
                Detail
              </button>
              <button
                className="product-right-detail-btn"
                onClick={() => {
                  setOrderDetail("addOn");
                }}
              >
                Add-On
              </button>
              <button
                className="product-right-detail-btn"
                onClick={() => {
                  setOrderDetail("shipping");
                }}
              >
                Shipping
              </button>
            </div>
            {orderDetail === "detail" ? (
              <p>Detail</p>
            ) : orderDetail === "addOn" ? (
              <p>Add-On</p>
            ) : (
              <p>shipping</p>
            )}
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="galleryL">
          <div className="gallery1">
            <img src={order4} alt="gallery" />
          </div>
          <div className="gallery4 scaleAdjust">
            <img src={gallery4} alt="gallery" />
          </div>
        </div>
        <div className="galleryR">
          <div className="galleryR-upper">
            <div className="gallery2 scaleAdjust">
              <img src={gallery2} alt="gallery" />
            </div>
            <div className="gallery3 scaleAdjust">
              <img src={turtleChip} alt="gallery" />
              <h3>
                Popular Snacks
                <br /> in Korea
              </h3>
            </div>
          </div>
          <div className="gallery5">
            <div />
            <div />
            <img src={order2} alt="gallery" />
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default Home;
