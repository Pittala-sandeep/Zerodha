import React from "react";
import "./Brokerage.css";

export default function ChargesTable() {
  return (
    <div className="container my-5">
      <ul className="nav border-bottom">
        <li className="nav-item">
          <a className="nav-link fs-3 fw-medium" href="#">
            Equity
          </a>
        </li>
      </ul>

      <div className="table-responsive mt-3">
        <table className="table table-bordered tableCharge">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&amp;O – Futures</th>
              <th>F&amp;O – Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Brokerage</th>
              <td>Zero Brokerage</td>
              <td>0.03% or ₹20/executed order whichever is lower</td>
              <td>0.03% or ₹20/executed order whichever is lower</td>
              <td>Flat ₹20 per executed order</td>
            </tr>
            <tr>
              <th>STT/CTT</th>
              <td>0.1% on buy &amp; sell</td>
              <td>0.025% on the sell side</td>
              <td>0.02% on the sell side</td>
              <td>
                <ul className="list-unstyled mb-0">
                  <li>
                    0.125% of the intrinsic value on options that are bought and
                    exercised
                  </li>
                  <li>0.1% on sell side (premium)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Transaction charges</th>
              <td>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00297% <br />
                BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00173% <br />
                BSE: 0
              </td>
              <td>
                NSE: 0.03503% <br />
                BSE: 0.0325% (on premium)
              </td>
            </tr>
            <tr>
              <th>GST</th>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            </tr>
            <tr>
              <th>SEBI charges</th>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <th>Stamp charges</th>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center mt-4">
        <p className="fs-5">
          <a href="#" className="text-primary">
            Calculate your costs upfront
          </a>{" "}
          using our brokerage calculator
        </p>
      </div>

      <div className="container my-5 ">
        <h2 className="mb-4">Charges explained</h2>
        <div className="row">
          <div className="col-md-6 fs-6 lh-lg">
            <h5>Securities/Commodities transaction tax</h5>
            <p>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>

            <h5>Transaction/Turnover Charges</h5>
            <p>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <ul>
              <li>
                BSE revised transaction charges in XC, XD, XT, Z, and ZP groups
                to ₹10,000 per crore w.e.f 01/01/2016. XD and ZP groups have
                been merged into a new group ‘X’ w.e.f 01/12/2017.
              </li>
              <li>
                BSE revised charges in SS and ST groups to ₹1,00,000 per crore
                of gross turnover.
              </li>
              <li>
                BSE revised charges for group A, B and other eligible scripts to
                ₹275 per crore w.e.f Dec 1, 2022.
              </li>
              <li>
                SEBI revised transaction charges in M, MT, T, TS and MS groups
                to ₹275 per crore of gross turnover.
              </li>
            </ul>

            <h5>Call & trade</h5>
            <p>
              Additional charges of ₹50 per order placed through a dealer at
              Zerodha including auto square off orders.
            </p>

            <h5>Stamp charges</h5>
            <p>
              Charged by the Government of India as per the Indian Stamp Act of
              1899.
            </p>

            <h5>NRI brokerage charges</h5>
            <ul>
              <li>₹100 per order for futures and options.</li>
              <li>
                For a non-PIS account, 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>₹50 + GST per account maintenance charges (AMC) charges.</li>
            </ul>

            <h5>Account with debit balance</h5>
            <p>
              If the account is in debit balance, ₹40 per executed order instead
              of ₹20 per executed order.
            </p>

            <h5>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h5>
            <ul>
              <li>Equity and Futures - ₹10 per crore + GST</li>
              <li>
                Options - ₹10 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹10 per crore + ₹1 GST turnover for Futures and ₹2
                per lakh + GST of premium for options.
              </li>
            </ul>

            <h5>Margin Trading Facility (MTF)</h5>
            <ul>
              <li>
                Interest: 0.04% per day (₹40 per lakh) on the funded amount.{" "}
              </li>
              <li>
                MTF Brokerage: 0.03% or ₹20/executed order, whichever is lower.
              </li>
              <li>MTF pledge charge: ₹15 + GST per pledge/unpledge request.</li>
            </ul>
          </div>

          <div className="col-md-6 lh-lg">
            <h5>GST</h5>
            <p>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>

            <h5>SEBI Charges</h5>
            <p>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>

            <h5>DP (Depository participant) charges</h5>
            <p>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity. <br />
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
              <br />
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>

            <h5>Pledging charges</h5>
            <p>₹30 + GST per pledge request per ISIN.</p>

            <h5>AMC (Account maintenance charges)</h5>
            <ul>
              <li>BSDA: Free (if holdings &lt; ₹40,000/year)</li>
              <li>Non-BSDA: ₹300/year + 18% GST charged quarterly</li>
            </ul>

            <h5>Corporate action order charges</h5>
            <p>
              ₹20 plus GST for OFS / buyback / takeover / delisting placed via
              Console.
            </p>

            <h5>Off-market transfer charges</h5>
            <p>₹25 per transaction.</p>

            <h5>Physical CMR request</h5>
            <p>First request free. ₹20 + ₹100 courier + 18% GST for others.</p>

            <h5>Payment gateway charges</h5>
            <p>₹9 + GST (not for UPI transfers).</p>

            <h5>Delayed Payment Charges</h5>
            <p>Interest: 18% a year or 0.05% per day on debit balance.</p>

            <h5>Trading using 3-in-1 account with block functionality</h5>
            <ul>
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </div>
        </div>
        <h5>Disclaimer</h5>
        <p>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>

      <div className="container mt-5">
        <h3 className="mb-4">Charges for account opening</h3>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-5 mb-4">Charges for optional value added services</h3>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Service</th>
              <th>Billing Frequency</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Historical: 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
