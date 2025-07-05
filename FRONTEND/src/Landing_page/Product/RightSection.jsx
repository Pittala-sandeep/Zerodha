import React from "react";

export default function RightSection({heading,para,link1, link2, image}) {
  return (
    <div className="container">
        <div className="row mx-5">
            <div className="col mx-5 p-5 text-muted lh-lg">
                <h2 className="mt-5 pt-5">{heading}</h2>
                <p>{para}</p>
                <p>{link1} {link2}</p>
            </div>
            <div className="col mx-5 py-5 ">
                <img
                    src={image}
                    alt=""
                    style={{ height: 390, width: 520 }}
                />
            </div>
        </div>
    </div>
  );
}
