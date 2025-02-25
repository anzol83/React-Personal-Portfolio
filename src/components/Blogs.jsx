
const Blogs = () => {
  return (
    <main className="content">
        <section id="blogs" className="section">
            <h2 className="section-title">Latest Articles</h2>
            <div className="blogs-container">
                <div className="blog-post">
                    <div className="blog-date"><i className="fa-regular fa-calendar"></i> Feb 7, 2025</div>
                    <h3 className="blog-title">How the Internet Works: A Beginner-Friendly Guide</h3>
                    <p className="blog-excerpt">A comprehensive guide to understanding the fundamental concepts of how the internet functions...</p>
                    <a href="https://medium.com/@angelneupane83/how-the-internet-works-a-beginner-friendly-guide-fc8ea25a1fb6" className="read-more" target="_blank" rel="noopener noreferrer">
                        Read More <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div className="blog-post">
                    <div className="blog-date"><i className="fa-regular fa-calendar"></i> Jan 24, 2025</div>
                    <h3 className="blog-title">My Experience on Learning About the History of the Web</h3>
                    <p className="blog-excerpt">A journey through the evolution of the World Wide Web and its impact on modern technology...</p>
                    <a href="https://medium.com/@angelneupane83/history-of-the-web-92c3d8ba6239" className="read-more" target="_blank" rel="noopener noreferrer">
                        Read More <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div className="blog-post">
                    <div className="blog-date"><i className="fa-regular fa-calendar"></i> Jan 24, 2025</div>
                    <h3 className="blog-title">The CSS Box Model: A Beginner`s Guide</h3>
                    <p className="blog-excerpt">Understanding the fundamental concept of CSS layout and how elements are structured on the web...</p>
                    <a href="https://medium.com/@angelneupane83/understanding-the-css-box-model-a-beginners-guide-93376529c5a6" className="read-more" target="_blank" rel="noopener noreferrer">
                        Read More <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div className="blog-post">
                    <div className="blog-date"><i className="fa-regular fa-calendar"></i> Feb 20, 2025</div>
                    <h3 className="blog-title">Understanding Loops in JavaScript: For, While, Do-While, Break, and Continue</h3>
                    <p className="blog-excerpt">Whether you`re just starting or looking to solidify your understanding, this guide will make loops easy to grasp....</p>
                    <a href="https://medium.com/@angelneupane83/understanding-loops-in-javascript-for-while-do-while-break-and-continue-ec31b20b6979" className="read-more" target="_blank" rel="noopener noreferrer">
                        Read More <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div className="blog-post">
                    <div className="blog-date"><i className="fa-regular fa-calendar"></i> Feb 21, 2025</div>
                    <h3 className="blog-title">Mastering the reduce() Method in JavaScript: A Beginner-Friendly Guide</h3>
                    <p className="blog-excerpt">Once you understand how it works, it opens up a world of possibilities for data manipulation in JavaScript...</p>
                    <a href="https://medium.com/@angelneupane83/mastering-the-reduce-method-in-javascript-a-beginner-friendly-guide-403bf84626c3" className="read-more" target="_blank" rel="noopener noreferrer">
                        Read More <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div className="blog-post">
                    <div className="blog-date"><i className="fa-regular fa-calendar"></i> Feb 8, 2025</div>
                    <h3 className="blog-title">Single Page Applications (SPAs) vs. Multi Page Applications (MPAs) in React: A Beginner-Friendly Guide</h3>
                    <p className="blog-excerpt">When I first heard these terms, they sounded technical and intimidating, but once I understood them, it all made sense....</p>
                    <a href="https://medium.com/@angelneupane83/single-page-applications-spas-vs-98d5bfb357d8" className="read-more" target="_blank" rel="noopener noreferrer">
                        Read More <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div className="blog-post">
                    <div className="blog-date"><i className="fa-regular fa-calendar"></i> Feb 11, 2025</div>
                    <h3 className="blog-title">What is Client-Side Rendering (CSR) and Server-Side Rendering (SSR)? A Beginner`s Guide</h3>
                    <p className="blog-excerpt">Understanding these will help you see what`s happening behind the scenes every time you visit a website!...</p>
                    <a href="https://medium.com/@angelneupane83/what-is-client-side-rendering-csr-and-server-side-rendering-ssr-a-beginners-guide-ed430852cb64" className="read-more" target="_blank" rel="noopener noreferrer">
                        Read More <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

            </div>
            <div className="view-all-blogs">
                <a href="https://medium.com/@angelneupane83" target="_blank" className="view-all-btn">
                    <span>View All Articles</span>
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </section>
    </main>
  )
}

export default Blogs
