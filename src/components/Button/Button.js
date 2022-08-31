import React from 'react';
import classes from './Button.module.scss';

const { buttonStyle } = classes;

const Button = ({ name }) => {
    return (
        <button className={buttonStyle}>{name}</button>
    );
};

export default Button;