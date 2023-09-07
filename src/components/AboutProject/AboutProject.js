import React from 'react';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>
        О проекте
      </h2>
      <ul className='about-project__list'>
        <li className='about-project__list-stage'>
          <h3 className='about-project__stage-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__stage-subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__stage'>
          <h3 className='about-project__stage-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__stage-subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='about-project__table'>
        <div className='about-project__columns-left'>
          <p className='about-project__stage-one'>
            1 неделя
          </p>
          <p className='about-project__stage-item-subtitle'>
            Back-end
          </p>
        </div>
        <div className='about-project__columns-right'>
          <p className='about-project__stage-two'>
            4 недели
          </p>
          <p className='about-project__stage-text'>
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
