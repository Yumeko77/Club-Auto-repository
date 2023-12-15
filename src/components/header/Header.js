import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <nav className="topbar">
          <h1>
            <span className="title"> CLUB AUTO</span>
          </h1>
          <div className="address">
            <p>
              <span className="location">
                <img src="images/icone-adresse.png" alt="location"></img>
                Adresse : {" "}
              </span>
              <span className="maps">
                 Avenue de Charles de Gaule 75000 PARIS
              </span>
            </p>
          </div>
          <div className="phone">
            <a href="tel:0123456789">
              <img src="images/icon-telephone.png" alt="phone"></img>
             01 23 45 67 89
            </a>
          </div>
          <div className="opentime">
            <h4>
              <span className="days">OUVERTURE :</span>
            </h4>
            <p> Du Lundi au Samedi</p>
            <h4>
              <span className="hours">HORAIRES :</span>
            </h4>
            <p> De 9h à 17h</p>
          </div>
          <div className="social-media">
            <i className="bi-facebook"></i>
            <i className="bi-twitter"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
