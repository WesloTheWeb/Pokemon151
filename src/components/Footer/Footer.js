import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            {
                (new Date().getFullYear() == '2022') ?
                    <span>Pokedex Classic v1.0.0 Copyright &copy; 2022 </span>
                    : <span>Pokedex Classic v1.0.0 Copyright &copy; 2022 - {new Date().getFullYear()} </span>
            }
            Oak Industries
        </footer>
    );
};

export default Footer;