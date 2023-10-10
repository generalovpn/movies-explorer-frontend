import React from 'react';
import './Info.css';

function Info({
  isOpen,
  infoMessage,
  infoType,
}) {
  return (
    <div className={`info ${infoType ? 'info_type_positive' : ''}  ${isOpen ? 'info_is-open' : ''}`}>
      <p className={`info__text ${infoType ? 'info__text_positive' : ''}`}>{infoMessage}</p>
    </div>
  );
}


export default Info;
