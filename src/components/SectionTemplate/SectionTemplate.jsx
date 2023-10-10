import React from 'react';
// import PropTypes from 'prop-types';
import './SectionTemplate.css';

function SectionTemplate(
  {
    title = 'Название секции',
    id = 'none',
    children,
  },
) {
  return (
    <section className={`section section_name_${id}`} id={id}>
      <h2 className="section__title">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default SectionTemplate;
