import React, { useState } from "react";
import Widget from "./Widget";
import "../App.css";

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle = {
    backgroundColor: "#61dafb",
    border: "2px solid #000000",
    borderRadius: "20px",
    color: "#000000",
    fontFamily: '"Roboto", sans-serif',
    textShadow: "1px 1px 2px grey",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2",
    transition: "all 0.4s ease-in-out",
  };

  const bannerStyle = {
    float: "left",
    marginTop: "1%",
    marginLeft: "10%",
    fontSize: ".8em",
  };

  const hoverStyle = {
    ...defaultStyle,
    backgroundColor: "#71eaff",
    color: "#FFFFFF",
  };

  return (
    <React.Fragment>
      <div style={bannerStyle}>
        <div
          style={isHovered ? hoverStyle : defaultStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1>
            Welcome to <br />
            Epichorus Merch Site!!
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
