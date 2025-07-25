// // src/components/Header.js
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Header.css";

// const Header = () => {
//   const navigate = useNavigate();

//   return (
//     <header className="navbar">
//       <div className="logo">🌐 Webstitch</div>
//       <nav>
//         <ul>
//           <li onClick={() => navigate("/")}>Home</li>
//           <li onClick={() => navigate("/why-webstitch")}>Why WebStitch</li>
//           <li onClick={() => navigate("/services")}>Services</li>
//           <li onClick={() => navigate("/company")}>Company</li>
//           <li onClick={() => navigate("/shop")}>Shop</li>
//           <li onClick={() => navigate("/portfolio")}>Portfolio</li>
//           <li onClick={() => navigate("/contact")}>Contact Us</li>
//         </ul>
//       </nav>
//       <div className="icons">
//         <span>♡</span>
//         <span>🛒</span>
//         <span>🔍</span>
//       </div>
//     </header>
//   );
// };

// export default Header;


// src/components/Header.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <header className={`navbar ${menuOpen ? "show-menu" : ""}`}>
      <div className="logo">🌐 Webstitch</div>

      <button className="menu-toggle" onClick={handleToggle}>
        ☰
      </button>

      <nav>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/why-webstitch")}>Why WebStitch</li>
          <li onClick={() => navigate("/services")}>Services</li>
          <li onClick={() => navigate("/company")}>Company</li>
          <li onClick={() => navigate("/shop")}>Shop</li>
          <li onClick={() => navigate("/portfolio")}>Portfolio</li>
          <li onClick={() => navigate("/contact")}>Contact Us</li>
        </ul>
      </nav>

      <div className="icons">
        <span>♡</span>
        <span>🛒</span>
        <span>🔍</span>
      </div>
    </header>
  );
};

export default Header;

