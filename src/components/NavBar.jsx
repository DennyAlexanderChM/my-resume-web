import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuIten = [
    { link: "#header", text: "Inicio" },
    { link: "#about-me", text: "Sobre mí" },
    { link: "#skills", text: "Habilidades" },
    { link: "#creations", text: "Portafolio" },
    { link: "#contact", text: "Contáctame" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#">DACM</a>
      </div>
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        {menuIten.map((item, index) => (
          <li className="nav-item" key={index}>
            <a href={item.link} className="nav-link">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default NavBar;
