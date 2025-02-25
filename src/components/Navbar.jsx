import { Link } from "react-router-dom"
import logo from "../assets/logo.webp"
const Navbar = () => {
  return (
    <nav>
    <div className="nav-content">
        <div className="nav-left">
            <img src={logo} alt="profile" className="profile-img" />
        </div>
        <div className="menu">
            <Link to="/" 
            // className="active"
            >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/project" >Projects</Link>
            <Link to="/blogs" >Blogs</Link>
            <Link href="/#contact" >Contact</Link>
        </div>
        <div className="icons">
            <a href="https://github.com/anzol83" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
            </a>
            <button id="dark-mode-toggle">
                <i className="fas fa-sun"></i>
            </button>
            <button id="menu-toggle" className="menu-toggle">
                <i className="fas fa-bars"></i>
            </button>
        </div>
    </div>
</nav>
  )
}

export default Navbar
