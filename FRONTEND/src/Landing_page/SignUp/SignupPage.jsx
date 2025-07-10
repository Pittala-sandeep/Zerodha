import React from "react";
import Hero from "./Hero";
import Inverstime from "./inverstiment";
import OpenAccount from "./openAccount";
import Benefits from "./Benifits";
import AccountType from "./AccountType";
import SignUp from "../Signup.jsx";

export default function ZerodhaLanding() {
  return (
    <div className="text-muted ">
      <Hero />
      <Inverstime />
      <OpenAccount />
      <Benefits />
      <AccountType />
      <SignUp text={
          "Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades."
        }
        heading={"Open a Zerodha account"}
      />
    </div>
  );
}