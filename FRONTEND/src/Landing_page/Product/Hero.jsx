import React from "react";

export default function Hero(){
    return(
        <div className="container">
            <div className="row text-center text-muted my-5 py-5 mx-2 px-2">
                <h1 className="lh-sm">Zerodha Products</h1>
                <p className="fs-4 lh-sm">Sleek, modern, and intuitive trading platforms</p>
                <p className="fs-6 lh-sm">Check out our <a href="">investment offerings <i className="fa-solid fa-arrow-right" /></a></p>
            </div>
            <hr />
        </div>
    )
}