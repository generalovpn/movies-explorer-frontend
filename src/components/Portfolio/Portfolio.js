import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://github.com/generalovpn/how-to-learn'>
            Статичный сайт
            <p className='portfolio__follow'>↗</p>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://github.com/generalovpn/russian-travel'>
            Адаптивный сайт
            <p className='portfolio__follow'>↗</p>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href='https://github.com/generalovpn/react-mesto-api-full-gha'>
            Одностраничное приложение
            <p className='portfolio__follow'>↗</p>
          </a>
        </li>
    </ul>
    </section>
  );
}

export default Portfolio;
