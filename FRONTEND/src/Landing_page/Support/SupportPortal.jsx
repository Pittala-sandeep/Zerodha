import React from "react";
import './SupportPortal.css'

export default function SupportPortal(){
    return(
        <div className=".container-fluid p-5  portal">
            <div className="row m-5">
                <div className="col-md-7">
                    <h4>Support Portal</h4>
                    <p className="fs-4 mt-4">Search for an answer or browse help topics to create a ticket</p>
                    <div className="search-box mt-3">
                        <input type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected …" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="mt-4">
                        <a href="#" className="me-4 link-underline">Track account opening</a>
                        <a href="#" className="me-4 link-underline">Track segment activation</a>
                        <a href="#" className="me-4 link-underline">Intraday margins</a>
                        <div className="mt-2">
                            <a href="#" className="link-underline">Kite user manual</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="text-end">
                        <a href="#" className="link-underline">Track tickets</a>
                    </div>

                    <div className="mt-5">
                        <h5>Featured</h5>
                        <ol>
                            <li><a href="#" className="link-underline">Surveillance measure on scrips – June 2025</a></li>
                            <li><a href="#" className="link-underline">Offer for sale (OFS) – June 2025</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}