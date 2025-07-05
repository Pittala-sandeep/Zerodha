import React from "react";

export default function Education(){
    return(
        <div className="container m-5 p-5">
            <div className="row align-items-center">
                <div className="col">
                    <img src="/images/education.svg" alt="" />
                </div>
                <div className="col text-muted">
                    <h2 className="pb-2">Free and open market education</h2>
                    <p className="py-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="">Varsity <i className="fa-solid fa-arrow-right"></i></a>
                    <p className="py-3">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}