import React from "react";

export default function LeftSection({image1,heading,para, link1, link2, a2,i1,i2}) {
  return (
    <div className="container mt-3 pt-3">
      <div className="row mx-5 py-5">
        <div className="col mx-5 py-5">
          <img
            src={image1}
            alt=""
            style={{ height: 390, width: 520 }}
          />
        </div>
        <div className="col mx-5 p-5 text-muted lh-lg">
          <h2 className="mt-5">{heading}</h2>
          <p className="">{para}</p>
          <p>{link1} {link2}</p>
          <img
            src="/images/googlePlayBadge.svg"
            alt=""
            style={{ height: 45, width: 151 }}
            className="mt-3"
          ></img>
          <img
            src="/images/appstoreBadge.svg"
            alt=""
            style={{ height: 45, width: 131 }}
            className="mt-3 ms-4"
          ></img>
        </div>
      </div>
    </div>
  );
}