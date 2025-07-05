import React from "react";

export default function Hero(){
    return(
        <div className="container px-5 pt-5">
            <div className="row text-center">
                <img
                src="/images/homeHero.png"
                alt="Hero Image"
                className="mx-auto" style={{height:350, width:840 }}
                />
            </div>
        </div>
    )
}