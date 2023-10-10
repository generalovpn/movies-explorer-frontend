import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className="portfolio__navigation">
        <h4 className="portfolio__navigation-list-title">Портфолио</h4>
        <ul className="portfolio__navigation-list">
          <li className="portfolio__navigation-list-item">
            <a
              href="https://github.com/generalovpn/how-to-learn/"
              className="portfolio__navigation-list-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__navigation-list-item">
            <a
              href="https://generalovpn.github.io/russian-travel"
              className="portfolio__navigation-list-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__navigation-list-item">
            <a
              href="https://github.com/generalovpn/react-mesto-api-full-gha"
              className="portfolio__navigation-list-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
        </div>
    </section>
  );
}

export default Portfolio;
