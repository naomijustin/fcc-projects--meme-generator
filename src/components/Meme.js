import React from "react";
import framedPicture from "../images/framed-picture.png"
//import memesData from "../memeData.js"

export default function Meme () {
    
    const [meme, setMeme] = React.useState({
            topText: '',
            bottomText: '',
            randomImage: "http://i.imgflip.com/1bij.jpg"
        });
    
    const [allMemeImages, setAllMemeImages] = React.useState();    


    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemeImages(data.data.memes));
    }, []);

    function randomImage() {
        let random = Math.floor(Math.random() * allMemeImages.length);                
        setMeme(function(prevState) {
            return {
                ...prevState,
                randomImage: allMemeImages[random].url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevState => (
            {
                ...prevState,
                [name]: value
            }
        ))
    }

    return (
        <main>
            <div className="section-meme">
                <div className="input-wrapper">
                    <input type="text" placeholder="Top Text" name="topText" onChange={handleChange}/>
                    <input type="text" placeholder="Bottom Text" name="bottomText" onChange={handleChange}/>
                </div>
                <button className="btn-GetNewMeme" onClick={randomImage}>Get a new meme image <img src={framedPicture} className="icon-Framedpicture"/></button>                
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            </div>
        </main>
    )
}