import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function BreadCrumbs({ pageTitle }) {
  return (
    <section className="caerp_breadcrumbs ">
        <div className="flex items-center">
            <h2>{pageTitle}</h2>
            <div className="flex ml-auto text-2xl"><Link to="/home"><IoClose/></Link></div>
        </div>
    </section>
  );
}

export default BreadCrumbs;

