import { useState, useEffect } from "react";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200); // Show button when scrolled down 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  return (
    <button
      onClick={scrollToTop}
      className={`go-top-btn ${visible ? "show" : ""}`} // Add 'show' class when visible
    >
      ↑
    </button>
  );
};

export default GoToTop;
