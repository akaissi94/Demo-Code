import React from "react";
import "./style.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-language">
          <span className="header-language_text">English</span>
          <img
            className="header-globe"
            src="../../images/internet.svg"
            height="15px"
            width="15px"
          />
        </div>
        <span className="header-date">السبت ١ حزيران ٢٠١٩</span>
      </div>
    );
  }
}

export default Header;
