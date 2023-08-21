import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__copyright">© 2023</p>
        <ul className="footer__links">
          <li>
            <Link
              className="footer__link link-hover"
              to="https://practicum.yandex.ru/"
            >
              Яндекс.Практикум
            </Link>
          </li>

          <li>
            <Link
              className="footer__link link-hover"
              to="https://github.com/generalovpn"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
