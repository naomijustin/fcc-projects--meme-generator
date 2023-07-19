import trollFace from '../images/troll-face.svg'

export default function Header() {
    return (
        <nav className="nav-container">
            <div>
                <img src={trollFace} alt="Troll Face" />
            </div>
            <div>
                Test
            </div>
        </nav>
    )
}