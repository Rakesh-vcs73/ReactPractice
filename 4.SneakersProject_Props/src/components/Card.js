/*
Star and image are images
Image
Star icon, rating review
title
cost /person
*/

import React from "react"
import jordan1 from "../images/Jordan_1.webp"
import star from "../images/star.png"

export default function Card(props){
    return(
        <div className="div_card">
            <img className="product_img_card" src= {jordan1}></img>
            <div className="rating_div">
                <img className="logo_img_card" src= {star}></img>
                <span><b>4.1</b></span>
                <span className="grey">(5) • </span>
                <span className="grey">India</span>
            </div>
            <p className="productName"><b> Air Jordan 1</b></p>
            <p className="rate">₹7</p>
        </div>
    )
}