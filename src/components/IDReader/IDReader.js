import React from 'react';
import classes from './IDReader.module.scss';

const { container } = classes;

const IDReader = ({ id, error }) => {
    return (
        <div className={container}>
            {error
                ? (<p>Generation 1 Only!</p>)
                : id
            }
        </div>
    );
};


export default IDReader;