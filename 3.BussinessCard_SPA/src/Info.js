//Photo name and etc.

import React from "react"

import profile from "./images/Rakesh.jpeg"

export default function Info(){
    return(
        <div className="div_info">
            <img className="Profile_pic" src={profile} alt="Profile"></img>
            <h1>Rakesh V</h1>
            <p><small>Full Stack Engineer</small></p>
        </div>
    )
}