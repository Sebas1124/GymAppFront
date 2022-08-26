import './Header.css';

import Logo from '../../assets/logo.png';

export const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="Logo" className="logo" />

        <ul className='Header-menu'>
            <li>Inicio</li>
            <li>Programas</li>
            <li>Historia</li>
            <li>Planes</li>
            <li>Testimonios</li>
        </ul>
    </div>
  )
}
