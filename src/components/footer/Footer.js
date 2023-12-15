import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-end">
        <div className="company-info">
          <h3>
            <span className="company-name">CLUB</span> AUTO
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            tempore dolore odio, hic fugit pariatur harum, eos voluptatem maxime
            architecto modi autem vero optio magni culpa error repellendus
            soluta distinctio.
          </p>
        </div>

        <div className="opening-hours">
          <h3>HORAIRES D'OUVERTURE</h3>
          <p>Lundi - Samedi : 9:00 - 17:00 </p>
          <p>Dimanche et jours fériés : Fermé </p>
        </div>

        <div className="newsletter-block">
          <h3>NEWSLETTER</h3>

          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Entrez votre email"
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-button">
              S'abonner
            </button>
          </form>
        </div>

        <div className="footer-right">
          <h3>RESEAUX SOCIAUX</h3>
          <ul className="social-icons">
            <li className="social-icon facebook">
              <a href="lien-facebook" className="btn btn-social btn-facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="social-icon twitter">
              <a href="lien-twitter" className="btn btn-social btn-twitter">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="social-icon instagram">
              <a href="lien-instagram" className="btn btn-social btn-instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="social-icon google">
              <a href="lien-googleplus" className="btn btn-social btn-google">
                <i className="bi bi-google"></i>
              </a>
            </li>
            <li className="social-icon youtube">
              <a href="lien-youtube" className="btn btn-social btn-youtube">
                <i className="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Copyright Club Auto - Tous droits réservés.</p>
      </div>
    </div>
  );
};

export default Footer;
