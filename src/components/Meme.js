import React from "react";
import framedPicture from "../images/framed-picture.png"

export default function Meme () {
    return (
        <section className="section-meme">
            <div className="input-wrapper">
                <input type="text"/>
                <input type="text"/>
            </div>
            <button>Get a new meme image <img src={framedPicture} className="icon-Framedpicture"/></button>
            
        </section>
    )
}