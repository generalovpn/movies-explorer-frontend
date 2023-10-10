import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">
          &#169; {new Date().getFullYear()}
        </p>
        <nav className="footer__navigation">
          <li className="footer__navigation-item">
            <a
              href="https://practicum.yandex.ru/"
              className="footer__navigation-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__navigation-item">
            <a
              href="https://github.com/generalovpn"
              className="footer__navigation-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
