import React from 'react';

import './error-indicator.css';
import icon from './error.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">Ошибка</span>
      <span>
        Что-то пошло не так :(
      </span>
    </div>
  );
};

export default ErrorIndicator;
