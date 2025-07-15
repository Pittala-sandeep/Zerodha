import React from "react";

export default function Universal() {
  return (
    <div className="container">
      <div className="row text-center text-muted lh-lg mb-4 pb-3">
        <p className="fs-5">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
      </div>
      <div className="row text-center text-muted lh-lg mb-4 pb-3">
        <h2>The Zerodha Universe</h2>
        <p className="fs-6">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div class="container text-center">
        <div class="row align-items-center mb-4 pb-4">
          <div class="col">
            <img
              className="mb-3"
              src="/images/zerodhaFundhouse.png"
              alt=""
              style={{ height: 55, width: 200 }}
            />
            <p className="text-center">
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.{" "}
            </p>
          </div>
          <div class="col">
            <img
              className="mb-3"
              src="/images/sensibullLogo.svg"
              alt=""
              style={{ height: 55, width: 200 }}
            />
            <p className="text-center">
              Options trading platform that lets you <br />
              create strategies, analyze positions, and examinedata points like
              open interest, FII/DII, and more.{" "}
            </p>
          </div>
          <div class="col">
            <img
              className="mb-3"
              src="/images/zerodhaFundhouse.png"
              alt=""
              style={{ height: 55, width: 200 }}
            />
            <p className="text-center">
              Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div class="row align-items-center mb-4 pb-4">
          <div class="col">
            <img
              className="mb-3"
              src="/images/streakLogo.png"
              alt=""
              style={{ height: 55, width: 200 }}
            />
            <p className="text-center">
              Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </div>
          <div class="col">
            <img
              className="mb-3"
              src="/images/smallcaseLogo.png"
              alt=""
              style={{ height: 55, width: 200 }}
            />
            <p className="text-center">
              Thematic investing platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </p>
          </div>
          <div class="col">
            <img
              className="mb-3"
              src="/images/dittoLogo.png"
              alt=""
              style={{ height: 55, width: 200 }}
            />
            <p className="text-center">
              Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling. Sign up for free
            </p>
          </div>
        </div>
        <div class="row align-items-center mb-5 pb-5">
          <div class="col">
            <a href="/signup">
              <button className="btn btn-primary fs-5 px-3 fw-semibold">
                Sign up for free
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}