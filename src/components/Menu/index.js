import React from 'react';
import Logo from '../../assets/img/Logo.png'
import '../Menu/menu.css'
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="Dev.AdêTv"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Adicionar Vídeo
            </Button>

        </nav>
    )
};

export default Menu; 