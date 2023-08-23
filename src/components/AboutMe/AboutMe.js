import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/my-photo.jpg';

function AboutMe() {
  return (
    <article className='about-me' id='student'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info'>
        <div className='about-me__align'>
          <h3 className='about-me__name'>Павел</h3>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 51 год</p>
          <p className='about-me__text'>Я родился в Орловской области. Проживаю в Москве. Окончил исторический факультет ОГПУ. Увлекаюсь грибной охотой (в хорошем смысле).
          В настоящее время решил сменить профессию. Так я оказался на курсах Яндекс Практикум. Обучение оказалось интересным и увлекательным. И оно мне понравилось. Остаётся трудоустроиться после окончания курсов - "всего делов-то)))".</p>
          <ul className='about-me__contacts'>
            <li className='about-me__contact'>
              <a className='about-me__link' href='https://github.com/generalovpn' target='_blank' rel='noreferrer'>Github</a>
            </li>
          </ul>
        </div>
        <img className='about-me__photo' src={myPhoto} alt='Фото студента' />
      </div>
    </article>
  );
}

export default AboutMe;
