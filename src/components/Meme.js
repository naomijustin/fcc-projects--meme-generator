import React from "react";
import framedPicture from "../images/framed-picture.png"
import memesData from "../memeData.js"

export default function Meme () {
    function randomImage() {
        let random = Math.floor(Math.random() * memesData.data.memes.length);
        console.log(memesData.data.memes[random].url);
    }

    return (
        <main>
            <div className="section-meme">
                <div className="input-wrapper">
                    <input type="text" placeholder="Top Text"/>
                    <input type="text" placeholder="Bottom Text"/>
                </div>
                <button className="btn-GetNewMeme" onClick={randomImage}>Get a new meme image <img src={framedPicture} className="icon-Framedpicture"/></button>
            </div>
        </main>
    )
}