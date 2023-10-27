// Links to other social media icons

import React from "react"

import fb_image from "./images/facebook.png"
import git_image from "./images/git.png"
import insta_image from "./images/instagram.png"
import twitter_image from "./images/twitter.png"

export default function Footer(){
    return(
        <div className="div_footer">
            <img src={fb_image} alt="facebook"></img>
            <img src={git_image} alt="fgit"></img>
            <img src={insta_image} alt="insta"></img>
            <img src={twitter_image} alt="facetwitterbook"></img>
        </div>
    )
}