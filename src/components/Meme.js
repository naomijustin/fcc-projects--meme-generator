import React from "react";
import framedPicture from "../images/framed-picture.png"

export default function Meme () {
    return (
        <main>
            <form className="section-meme">
                <div className="input-wrapper">
                    <input type="text" placeholder="Top Text"/>
                    <input type="text" placeholder="Bottom Text"/>
                </div>
                <button className="btn-GetNewMeme">Get a new meme image <img src={framedPicture} className="icon-Framedpicture"/></button>
            </form>
        </main>
    )
}