
const About = () => {
  return (
    <main className="content">
    <section className="about-section section">
        <h1 className="section-title">About Me</h1>
        <div className="about-content">
            <div className="about-text">
                <p>Hello, I`m Anzol Neupane a passionate full-stack developer dedicated to building innovative and user-friendly applications 
                    that solve real-world problems. With expertise in both front-end and back-end development, I specialize in 
                    creating seamless, scalable, and high-performing solutions that enhance user experiences.</p>
                
                <p>I thrive on exploring new technologies, optimizing system performance, and tackling complex challenges that 
                    push me to grow. My approach to development is driven by problem-solving, collaboration, and a commitment to 
                    best practices. Whether it`s developing interactive web applications, integrating modern frameworks, or streamlining 
                    workflows, I strive to create intuitive and efficient software that makes an impact.</p>

            </div>

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

            <div className="github-contributions">
                <h2>GitHub Contributions</h2>
                <img src="https://ghchart.rshah.org/anzol83" alt="GitHub Contributions Graph" className="contributions-graph" />
            </div>

            <div className="skills-section">
                <h2>Skills & Technologies</h2>
                <div className="skills-grid">
                    <div className="skill-item">
                        <i className="fab fa-html5"></i>
                        <span>HTML5</span>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-css3-alt"></i>
                        <span>CSS3</span>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-js"></i>
                        <span>JavaScript</span>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-react"></i>
                        <span>React</span>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-node-js"></i>
                        <span>Node.js</span>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-git-alt"></i>
                        <span>Git</span>
                    </div>
                    <div className="skill-item">
                        <i className="fa-brands fa-github"></i>
                        <span>Github</span>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-node-js"></i>
                        <span>Express.js</span>
                    </div>
                    <div className="skill-item">
                        <i className="fas fa-database"></i>
                        <span>MongoDB</span>
                    </div>
                    <div className="skill-item">
                        <i className="fa-brands fa-bootstrap"></i>
                        <span>Bootstrap</span>
                    </div>
                    
                    </div>
                </div>
            </div>
    </section>

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
  )
}

export default About
