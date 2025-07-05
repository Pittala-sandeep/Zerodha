import React from "react";
import "./Ticket.css";

export default function Ticket() {
  return (
    <div class="container py-5 ticket">
      <h5 class="mb-4 pb-4">To create a ticket, select a relevant topic</h5>
      <div class="row row-cols-1 row-cols-md-3 g-5">
        <div class="col">
          <div class="icon-heading ">
            <a href="" className="text-black text-muted">
              <i class="fa-solid fa-circle-plus"></i> &nbsp;
              <span className="fs-5">Account Opening</span>
            </a>
          </div>
          <div className="ps-4 pt-3 fs-6 fw-ligh">
            <a href="#">Resident individual</a>
            <a href="#">Minor</a>
            <a href="#">Non Resident Indian (NRI)</a>
            <a href="#">Company, Partnership, HUF and LLP</a>
            <a href="#">Glossary</a>
          </div>
        </div>

        <div class="col">
          <div class="icon-heading">
            <a href="" className="text-black text-muted">
              <i class="fa-solid fa-user"></i> &nbsp;
              <span className="fs-5">Your Zerodha Account</span>
            </a>
          </div>
          <div className="ps-4 pt-3 fs-6 fw-ligh">
            <a href="#">Your Profile</a>
            <a href="#">Account modification</a>
            <a href="#">Client Master Report (CMR) and DP</a>
            <a href="#">Nomination</a>
            <a href="#">Transfer and conversion of securities</a>
          </div>
        </div>

        <div class="col">
          <div class="icon-heading">
            <a href="" className="text-black text-muted">
              <i class="fa-solid fa-chart-simple"></i> &nbsp;
              <span className="fs-5">Kite</span>
            </a>
          </div>
          <div className="ps-4 pt-3 fs-6 fw-ligh">
            <a href="#">IPO</a>
            <a href="#">Trading FAQs</a>
            <a href="#">Margin Trading Facility (MTF) and Margins</a>
            <a href="#">Charts and orders</a>
            <a href="#">Alerts and Nudges</a>
            <a href="#">General</a>
          </div>
        </div>

        <div class="col">
          <div class="icon-heading">
            <a href="" className="text-black text-muted">
              <i class="fa-regular fa-credit-card"></i> &nbsp;
              <span className="fs-5">Funds</span>
            </a>
          </div>
          <div className="ps-4 pt-3 fs-6 fw-ligh">
            <a href="#">Add money</a>
            <a href="#">Withdraw money</a>
            <a href="#">Add bank accounts</a>
            <a href="#">eMandates</a>
          </div>
        </div>

        <div class="col">
          <div class="icon-heading">
            <a href="" className="text-black text-muted">
              <i class="fa-solid fa-chart-pie"></i> &nbsp;
              <span className="fs-5">Console</span>
            </a>
          </div>
          <div className="ps-4 pt-3 fs-6 fw-ligh">
            <a href="#">Portfolio</a>
            <a href="#">Corporate actions</a>
            <a href="#">Funds statement</a>
            <a href="#">Reports</a>
            <a href="#">Profile</a>
            <a href="#">Segments</a>
          </div>
        </div>

        <div class="col">
          <div class="icon-heading">
            <a href="" className="text-black text-muted">
              <i class="fa-solid fa-coins"></i> &nbsp;
              <span className="fs-5">Coin</span>
            </a>
          </div>
          <div className="ps-4 pt-3 fs-6 fw-ligh">
            <a href="#">Mutual funds</a>
            <a href="#">National Pension Scheme (NPS)</a>
            <a href="#">Features on Coin</a>
            <a href="#">Payments and Orders</a>
            <a href="#">General</a>
          </div>
        </div>
      </div>
    </div>
  );
}
