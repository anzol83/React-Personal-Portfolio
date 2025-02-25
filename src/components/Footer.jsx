
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
        <div className="footer-info">
            <h3>Let`s Create Something Amazing Together</h3>
            <p>Open for collaborations and exciting projects</p>
            <div className="footer-social">
                <a href="https://github.com/anzol83" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/anzol-neupane-276894250/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://x.com/az_anzol" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-x-twitter"></i>
                </a>
                <a href="mailto:angelneupane83@gmail.com">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>

        {/* <!-- Scroll to top button --> */}
        <button id="goTopBtn" className="go-top-btn">
            ↑
          </button>
          

        {/* <!--  Footer Section --> */}
        <div className="footer-bottom">
            <p>&copy; 2024 Anzol Neupane. All rights reserved.</p>
        </div>
    </div>
</footer>
  )
}

export default Footer
