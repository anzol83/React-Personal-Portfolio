import './App.css'
import logo from "./assets/logo.webp"
import profile from './assets/profile.jpg'
import blackfriday from './assets/blackfriday.png'
import calc from "./assets/calc.png"
import space from './assets/space.png'
import ntdl from './assets/ntdl.png'

function App() {

  return (
    <>
          {/* <!-- Nav Container Section --> */}
    <nav>
        <div className="nav-content">
            <div className="nav-left">
                <img src={logo} alt="profile" className="profile-img" />
            </div>
            <div className="menu">
                {/* <!-- <a href="#" className="active">Home</a> --> */}
                <a href="about.html">About</a>
                <a href="projects.html">Projects</a>
                <a href="#blogs">Blogs</a>
                <a href="#contact">Contact</a>
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

    <div className="mobile-menu">
        <a href="#" className="mobile-link active">Home</a>
        <a href="about.html" className="mobile-link">About</a>
        <a href="projects.html" className="mobile-link">Projects</a>
        <a href="#blogs" className="mobile-link">Blogs</a>
        <a href="#contact" className="mobile-link">Contact</a>
    </div>

    {/* <!-- Hero Section --> */}
    <main className="content">
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="name">Anzol Neupane</h1>
                    <span id="typed-text"></span> <br/>
                    <p className="hero-description">Creative developer crafting digital experiences that merge innovation with functionality.</p>
                    <div className="hero-buttons">
                        <a href="about.html" className="about-btn">About Me</a>
                        <a href="assets/resume1.docx" className="resume-btn">
                            <i className="fas fa-download"></i>
                            Resume
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-glow"></div>
                    <img src={profile} alt="Anzol Neupane" className="profile-hero-img"/>
                </div>
            </div>
        </section>

        {/* <!-- Work Experience --> */}
        <div className="work-experience">
            <h2>Work Experience</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <div className="timeline-date">2024 - Present</div>
                        <h3>Full Stack Developer</h3>
                        <h4>ABC Company</h4>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <div className="timeline-date">2022 - 2023</div>
                        <h3>Junior Web Developer</h3>
                        <h4>ZZZ Company</h4>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Projects Section --> */}
        <section id="projects" className="section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-image">
                        <img src={blackfriday} alt="Black Friday Project"/>
                        <div className="project-overlay">
                            <div className="project-buttons">
                                <a href="https://black-friday-inky.vercel.app/" className="project-btn" target="_blank" rel="noopener noreferrer">Live Preview</a>
                                <a href="https://github.com/anzol83/Black-Friday" className="project-btn" target="_blank" rel="noopener noreferrer">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Black Friday</h3>
                        <p>A responsive e-commerce landing page showcasing Black Friday deals with modern design principles and smooth animations.</p>
                        <div className="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src={ntdl} alt="Not To Do List"/>
                        <div className="project-overlay">
                            <div className="project-buttons">
                                <a href="https://not-to-do-list-iota.vercel.app/" className="project-btn" target="_blank" rel="noopener noreferrer">Live Preview</a>
                                <a href="https://github.com/anzol83/Not-To-Do-List" className="project-btn" target="_blank" rel="noopener noreferrer">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Not To Do List</h3>
                        <p>An innovative twist on traditional todo apps, helping users identify and avoid productivity-draining habits.</p>
                        <div className="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src={space} alt="space-expo"/>
                        <div className="project-overlay">
                            <div className="project-buttons">
                                <a href="https://space-exploration-hub.vercel.app/" className="project-btn" target="_blank" rel="noopener noreferrer">Live Preview</a>
                                <a href="https://github.com/anzol83/Space-Exploration-Hub" className="project-btn" target="_blank" rel="noopener noreferrer">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Space Exploration Hub</h3>
                        <p>A modern and responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and dark mode.</p>
                        <div className="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src={calc} alt="Simple-Calc"/>
                        <div className="project-overlay">
                            <div className="project-buttons">
                                <a href="https://simple-calc-ashy.vercel.app/" className="project-btn" target="_blank" rel="noopener noreferrer">Live Preview</a>
                                <a href="https://github.com/anzol83/simple-calc" className="project-btn" target="_blank" rel="noopener noreferrer">View Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-info">
                        <h3>Simple Calc</h3>
                        <p>A weather application that provides real-time weather data, forecasts, and interactive weather maps using OpenWeather API.</p>
                        <div className="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="view-all-projects">
                <a href="projects.html" className="view-all-btn">
                    <span>View All Projects</span>
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </section>

        {/* <!-- Blogs Section --> */}
        <section id="blogs" className="section">
            <h2 className="section-title">Latest Articles</h2>
            <div className="blogs-container">
                <div className="blog-post">
                    <div className="blog-date"><i className="fa-regular fa-calendar"></i> Feb 7, 2024</div>
                    <h3 className="blog-title">How the Internet Works: A Beginner-Friendly Guide</h3>
                    <p className="blog-excerpt">A comprehensive guide to understanding the fundamental concepts of how the internet functions...</p>
                    <a href="https://medium.com/@angelneupane83/how-the-internet-works-a-beginner-friendly-guide-fc8ea25a1fb6" className="read-more" target="_blank" rel="noopener noreferrer">
                        Read More <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div className="blog-post">
                    <div className="blog-date"><i className="fa-regular fa-calendar"></i> Nov 24, 2023</div>
                    <h3 className="blog-title">My Experience on Learning About the History of the Web</h3>
                    <p className="blog-excerpt">A journey through the evolution of the World Wide Web and its impact on modern technology...</p>
                    <a href="https://medium.com/@angelneupane83/history-of-the-web-92c3d8ba6239" className="read-more" target="_blank" rel="noopener noreferrer">
                        Read More <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div className="blog-post">
                    <div className="blog-date"><i className="fa-regular fa-calendar"></i> Dec 24, 2023</div>
                    <h3 className="blog-title">The CSS Box Model: A Beginner`s Guide</h3>
                    <p className="blog-excerpt">Understanding the fundamental concept of CSS layout and how elements are structured on the web...</p>
                    <a href="https://medium.com/@angelneupane83/understanding-the-css-box-model-a-beginners-guide-93376529c5a6" className="read-more" target="_blank" rel="noopener noreferrer">
                        Read More <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="view-all-blogs">
                <a href="#" className="view-all-btn">
                    <span>View All Articles</span>
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </section>

        {/* <!-- Get In Touch Section --> */}
        <section id="contact" className="section">
            <h2 className="section-title">Get In Touch</h2>
            <form id="contact-form" className="contact-form">
                <div className="form-group">
                    <input type="text" id="name" name="name" required placeholder="Your Name"/>
                </div>
                <div className="form-group">
                    <input type="email" id="email" name="email" required placeholder="Your Email"/>
                </div>
                <div className="form-group">
                    <input type="text" id="subject" name="subject" required placeholder="Subject"/>
                </div>
                <div className="form-group">
                    <textarea id="message" name="message" required placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </section>
    </main>

    {/* <!-- Footer Section --> */}
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
    </>
  )
}

export default App
