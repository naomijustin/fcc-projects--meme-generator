import React from "react";
import framedPicture from "../images/framed-picture.png"
import memesData from "../memeData.js"

console.log(memesData);

export default function Meme () {
    function randomImage() {
        let random = Math.floor(Math.random() * 100);
        console.log(memesData.data.memes[random].url);
        //console.log(memesData.data.memes.url[random]);
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