import React from "react";
import { Link, useLocation } from "react-router-dom";

const zodiacColors = {
  aquarius: "#E6E6FA",
  aries: "#6495ED",
  cancer: "#20B2AA",
  capricorn: "#87CEFA",
  gemini: "#F0E68C",
  leo: "#FFA07A",
  libra: "#FFB6C1",
  pisces: "#B0C4DE",
  sagittarius: "#BC8F8F",
  scorpio: "#CD5C5C",
  taurus: "#8FBC8F",
  virgo: "#9370D8",
};

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1].toLowerCase();

  const navbarColor = zodiacColors[path] || zodiacColors.aquarius;


  const zodiacSigns = [
    "aquarius", "aries", "cancer", "capricorn", "gemini", "leo", "libra", "pisces", 
    "sagittarius", "scorpio", "taurus", "virgo"
  ];

  return (
    <nav className="navbar" style={{ backgroundColor: navbarColor }}>
      <div
        className="navbar-container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {zodiacSigns.map((sign) => {
          if (sign !== path) {
            return (
              <Link to={`/${sign}`} key={sign} className="navbar-link">
                {sign.charAt(0).toUpperCase() + sign.slice(1)}
              </Link>
            );
          }
          return null;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
