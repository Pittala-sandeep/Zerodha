import React from "react";

export default function Pricing(){
    return(
        <div className="container mt-5 pt-5">
            <div className="row mx-auto text-muted  px-5">
                <div className="col-4 p-4">
                <h3 className="mb-4">Unbeatable pricing</h3>
                <p className="lh-lg">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="">See pricing <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-7 d-flex pt-5 ps-5">
                <div className="row">
                <div className="col-4 d-flex">
                    <img src="/images/pricing0.svg" alt="" style={{height:88, width:120}}/>
                    <p style={{fontSize:9}} className="pt-5">Free account <br />opening</p>
                </div>
                <div className="col-5 d-flex">
                    <img src="/images/pricing0.svg" alt="" style={{height:88, width:120}}/>
                    <p style={{fontSize:9}} className="pt-5">Free equity delivery <br />and direct mutual funds</p>
                </div>
                <div className="col-3 d-flex">
                    <img src="/images/intradayTrades.svg" alt="" style={{height:88, width:120}}/>
                    <p style={{fontSize:9}} className="pt-5">intraday and F&O</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}