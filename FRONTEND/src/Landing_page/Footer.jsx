import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid  px-5 border-top bg-light">
      <div className="row mt-4 ">
        <div className="col-1"></div>
        <div className="col-2">
          <img
            src="/images/logo.svg"
            alt=""
            style={{ height: 20, width: 150 }}
            className="mb-3"
          />
          <p style={{fontSize:12}} className="lh-lg">© 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.</p>
          <a href=""><i className="fa-brands fa-x-twitter me-4 text-muted fs-6"></i></a>
          <a href=""><i className="fa-brands fa-square-facebook me-4 text-muted fs-6"></i></a>
          <a href=""><i className="fa-brands fa-instagram me-4 text-muted fs-6"></i></a>
          <a href=""><i className="fa-brands fa-linkedin-in me-4 text-muted fs-6"></i></a>
          <hr />
          <a href=""><i className="fa-brands fa-youtube me-4 text-muted fs-6"></i></a>
          <a href=""><i className="fa-brands fa-whatsapp me-4 text-muted fs-6"></i></a>
          <a href=""><i className="fa-brands fa-telegram me-4 text-muted fs-6"></i></a>
        </div>
        <div className="col-2 footerText">
          <a href="">Account</a> <br />
          <a href="">Open demat account</a> <br />
          <a href="">Minor demat account</a> <br />
          <a href="">NRI demat account</a> <br />
          <a href="">Commodity</a> <br />
          <a href="">Dematerialisation</a> <br />
          <a href="">Fund transfer</a> <br />
          <a href="">MTF</a> <br />
          <a href="">Referral program</a> <br />
        </div>
        <div className="col-3 footerText">
          <a href="">Support</a> <br />
          <a href="">Contact us</a> <br />
          <a href="">Support portal</a> <br />
          <a href="">How to file a complaint?</a> <br />
          <a href="">Status of your complaints</a> <br />
          <a href="">Bulletin</a> <br />
          <a href="">Circular</a> <br />
          <a href="">Z-Connect blog</a> <br />
          <a href="">Downloads</a> <br />
        </div>
        <div className="col-2 footerText">
          <a href="">Company</a> <br />
          <a href="">About</a> <br />
          <a href="">Philosophy</a> <br />
          <a href="">Press & media</a> <br />
          <a href="">Careers</a> <br />
          <a href="">Zerodha Cares (CSR)</a> <br />
          <a href="">Zerodha.tech</a> <br />
          <a href="">Open source</a> <br />
        </div>
        <div className="col-2 footerText">
          <a href="">Quick links</a> <br />
          <a href="">Upcoming IPOs</a> <br />
          <a href="">Brokerage charges</a> <br />
          <a href="">Market holidays</a> <br />
          <a href="">Economic calendar</a> <br />
          <a href="">Calculators</a> <br />
          <a href="">Markets</a> <br />
          <a href="">Sectors</a> <br />
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row mt-5 text-muted">
        <div className="col-1"></div>
        <div className="col-10">
            <p style={{fontSize:12}} className="lh-lg">
                Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
                no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
                Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
                through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
                Registration no.: INZ000038238 Registered Address: Zerodha Broking
                Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
                School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
                any complaints pertaining to securities broking please write to
                complaints@zerodha.com, for DP related to dp@zerodha.com. Please
                ensure you carefully read the Risk Disclosure Document as prescribed
                by SEBI | ICF
            </p>
            <p style={{fontSize:12}} className="lh-lg">
                Procedure to file a complaint on SEBI SCORES: Register on SCORES
                portal. Mandatory details for filing complaints on SCORES: Name, PAN,
                Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
                Speedy redressal of the grievances
            </p>
            <p style={{fontSize:12}} className="lh-lg">Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
            <p style={{fontSize:12}} className="lh-lg">
                Investments in securities market are subject to market risks; read all
                the related documents carefully before investing.
            </p>
            <p style={{fontSize:12}} className="lh-lg">
                Attention investors: 1 Stock brokers can accept securities as margins
                from clients only by way of pledge in the depository system w.e.f
                September 01, 2020. 2 Update your e-mail and phone number with your
                stock broker / depository participant and receive OTP directly from
                depository on your e-mail and/or mobile number to create pledge. 3
                Check your securities / MF / bonds in the consolidated account
                statement issued by NSDL/CDSL every month.
            </p>
            <p style={{fontSize:12}} className="lh-lg">
                "Prevent unauthorised transactions in your account. Update your mobile
                numbers/email IDs with your stock brokers. Receive information of your
                transactions directly from Exchange on your mobile/email at the end of
                the day. Issued in the interest of investors. KYC is one time exercise
                while dealing in securities markets - once KYC is done through a SEBI
                registered intermediary (broker, DP, Mutual Fund etc.), you need not
                undergo the same process again when you approach another
                intermediary." Dear Investor, if you are subscribing to an IPO, there
                is no need to issue a cheque. Please write the Bank account number and
                sign the IPO application form to authorize your bank to make payment
                in case of allotment. In case of non allotment the funds will remain
                in your bank account. As a business we don't give stock tips, and have
                not authorized anyone to trade on behalf of others. If you find anyone
                claiming to be part of Zerodha and offering such services, please
                create a ticket here.
            </p>
            <p style={{fontSize:12}} className="lh-lg">
                NSE BSE MCX Terms & conditions Policies & procedures Privacy policy
                Disclosure For investor's attention Investor charter
            </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
