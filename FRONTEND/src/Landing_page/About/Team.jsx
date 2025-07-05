import React from "react";

export default function Team() {
  return (
    <div className="container">
      <div className="row m-5 p-5">
        <h2 className="text-center text-muted">People</h2>
        <div className="col-1 my-4 py-4"></div>
        <div className="col-4 my-4 py-4 text-center">
          <img
            src="/images/nithinKamath.jpg"
            alt=""
            style={{ height: 295, width: 295, borderRadius: 1000 }}
          />
          <h4>Nithin Kamath</h4>
          <p>Founder, CEO</p>
        </div>
        <div className="col-6 my-4 py-4">
          <p className="pt-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}