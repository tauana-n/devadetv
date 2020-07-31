import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logometal.png'
import '../Menu/menu.css'
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="Dev.MetalTv"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Adicionar Vídeo
            </Button>

        </nav>
    )
};

export default Menu; 