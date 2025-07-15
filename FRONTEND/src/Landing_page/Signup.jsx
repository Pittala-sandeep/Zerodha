import React from "react";

export default function SignUp({text,heading}){
    return(
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className=" mb-3 text-muted ">{heading}</h1>
                <p className="mb-5 fs-5 text-muted ">
                {text}
                </p>
                <a href="/signup"><button
                className="p-2 btn  fs-5 mb-5 signup"
                style={{ width: "18%", margin: "0 auto" }}
                >
                Sign up for free
                </button></a>
            </div>
        </div>
    )
}