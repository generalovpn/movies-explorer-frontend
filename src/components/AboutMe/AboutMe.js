import React from "react";
import { Link } from "react-router-dom";
import photo from "../../images/photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <article className="about-me__info">
        <h3 className="about-me__info-title">Павел</h3>
        <p className="about-me__info-subtitle">Фронтенд-разработчик, 51 год</p>
        <p className="about-me__info-text">
          Я родился в Орловской области. Проживаю в Москве. Окончил исторический факультет ОГПУ. Увлекаюсь грибной охотой (в хорошем смысле).
          В настоящее время решил сменить профессию. Так я оказался на курсах Яндекс Практикум. Обучение оказалось интересным и увлекательным. И оно мне понравилось. Остаётся трудоустроиться после окончания курсов - "всего делов-то)))".
        </p>
        <Link
          className="about-me__info-link link-hover"
          to="https://github.com/generalovpn"
        >
          Github
        </Link>

        <img className="about-me__photo" src={photo} alt="Фото студента"></img>
      </article>
    </section>
  );
}

export default AboutMe;
