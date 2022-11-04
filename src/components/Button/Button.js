import React from 'react';
import classes from './Button.module.scss';

const { buttonStyle, controls } = classes;

const Button = ({ name, clicked }) => {
    return (
        <button
            className={`${buttonStyle} ${controls}`}
            onClick={clicked}
            >
            {name}
        </button>
    );
};

export default Button;