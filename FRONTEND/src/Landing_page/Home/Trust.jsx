import React from "react";

export default function Trust() {
  return (
    <div className="container mb-5">
      <div className="row mx-auto text-muted">
        <div className="col-5 p-5">
          <h3 className="mb-5">Trust with confidence</h3>
          <h5>Customer-first always</h5>
          <p className="mb-4 mt-1 lh-lg">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h5>Customer-first always</h5>
          <p className="mb-4 mt-1 lh-lg">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h5>The Zerodha universe</h5>
          <p className="mb-4 mt-1 lh-lg">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h5>Do better with money</h5>
          <p className="mb-4 mt-1 lh-lg">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-7 text-center">
          <img
            src="/images/ecosystem.png"
            alt=""
            style={{ height: 612, width: 623 }}
          />{" "}
          <br />
          <a href="" className="me-2">
            Explore our products <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="" className="ms-2">
            Try Kite demo <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="text-center">
          <a href="">
            <img src="/images/pressLogos.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}