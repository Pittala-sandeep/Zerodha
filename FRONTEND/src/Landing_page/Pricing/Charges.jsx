import React from 'react';

export default function Charges(){
  return (
    <div className='container'>
        <div className='row m-5 p-5 text-center'>
            <h1 className="text-muted my-0">Charges</h1>
            <p className="text-muted fs-4 my-3">List of all charges and taxes</p>
        </div>
        <div className="row justify-content-center text-center mt-5 pt-5 mx-5">

          <div className="col-md-4 mb-4">
            <img src="/images/pricing0.svg" className='mb-4' alt=""  style={{height:180, width:250}}/>
            <h2 className='text-muted mb-4'>Free equity delivery</h2>
            <p className="text-muted lh-lg mt-4">
              All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <img src="/images/intradayTrades.svg"  className='mb-4' alt=""  style={{height:180, width:250}}/>
            <h2 className='text-muted mb-4'>Intraday and F&O trades</h2>
            <p className="text-muted lh-lg mt-4">
              Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <img src="/images/pricing0.svg" className='mb-4' alt=""  style={{height:180, width:250}}/>
            <h2 className='text-muted mb-4'>Free direct MF</h2>
            <p className="text-muted lh-lg mt-4">
              All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
            </p>
          </div>
        </div>
    </div>
  );
};