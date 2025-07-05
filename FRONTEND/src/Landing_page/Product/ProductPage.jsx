import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universal from "./Universal";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        image1={"/images/kite.png"}
        heading={"Kite"}
        para={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        link1={
          <a href="" className="mt-3 me-4">
            Try demo <i className="fa-solid fa-arrow-right"></i>
          </a>
        }
        link2={
          <a href="" className="mt-3 ms-1">
            Learn more <i className="fa-solid fa-arrow-right"></i>
          </a>
        }
      />
      <RightSection
        heading={"Console"}
        para={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        link1={
          <a href="" className="mt-3 ms-1">
            Learn more <i className="fa-solid fa-arrow-right"></i>
          </a>
        }
        image={"/images/console.png"}
      />
      <LeftSection
        image1={"/images/coin.png"}
        heading={"Coin"}
        para={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        link1={
          <a href="" className="mt-3 me-4">
            Coin <i className="fa-solid fa-arrow-right"></i>
          </a>
        }
      />
      <RightSection 
        heading={"Kite Connect API"}
        para={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        link1={
          <a href="" className="mt-3 ms-1">
            Kite Connect <i className="fa-solid fa-arrow-right"></i>
          </a>
        }
        image={"/images/kiteconnect.png"}
      />
      <LeftSection
        image1={"/images/varsity.png"}
        heading={"Varsity mobile"}
        para={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
      />
      <Universal />
    </>
  );
}
