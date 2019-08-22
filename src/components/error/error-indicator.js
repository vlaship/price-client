import React from 'react';

import icon from './error.png';

const ErrorIndicator = () => {
    return (
        <div>
            <img src={icon} alt="error icon"/>
            <p>Что-то пошло не так :(</p>
        </div>
    );
};

export default ErrorIndicator;
