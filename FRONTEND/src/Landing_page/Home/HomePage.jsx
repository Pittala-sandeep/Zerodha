import React from "react";
import Hero from "./Hero.jsx";
import Trust from "./Trust.jsx";
import Pricing from "./Pricing.jsx";
import Education from "./Education.jsx";
import SignUp from "../Signup.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignUp
        text={
          "Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more."
        }
        heading={"Invest in everything"}
      />
      <Trust />
      <Pricing />
      <Education />
      <SignUp
        text={
          "Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."
        }
        heading={"Open a Zerodha account"}
      />
    </>
  );
}
