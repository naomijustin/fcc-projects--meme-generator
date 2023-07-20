import trollFace from '../images/troll-face.svg'

export default function Header() {
    return (
        <nav className="nav-container">
            <div className="nav-left">
                <img src={trollFace} alt="Troll Face" />
                <span>Meme Generator</span>
            </div>
            <div>
                <span>React Course - Project 3</span>
            </div>

        </nav>
    )
}