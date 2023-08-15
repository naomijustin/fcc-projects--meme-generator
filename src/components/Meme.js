import React from "react";
import framedPicture from "../images/framed-picture.png"
import memesData from "../memeData.js"

export default function Meme () {
    
    const [img, setImg] = React.useState({
            topText: '',
            bottomText: '',
            randomImage: "http://i.imgflip.com/1bij.jpg"
        });
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function randomImage() {
        let random = Math.floor(Math.random() * allMemeImages.data.memes.length);                
        setImg(function(prevState) {
            return {
                ...prevState,
                randomImage: allMemeImages.data.memes[random].url
            }
        })
    }

    return (
        <main>
            <div className="section-meme">
                <div className="input-wrapper">
                    <input type="text" placeholder="Top Text"/>
                    <input type="text" placeholder="Bottom Text"/>
                </div>
                <button className="btn-GetNewMeme" onClick={randomImage}>Get a new meme image <img src={framedPicture} className="icon-Framedpicture"/></button>
                <img className="img-Meme" src={img.randomImage}></img>
            </div>
        </main>
    )
}