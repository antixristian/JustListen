import Logo from '../../assets/Logo 1.svg';
import './style.css';

function Header() {
    return (
        <header className='WebsiteHeader'>
            <a className='HeaderA' href="/">
                <img className='Logo' src={Logo} alt="Logo Justlisten" />
            </a>
            <ul className='navBar'>
                <li><a href="https://twitter.com/odesli_" className='ItemTexto'>Créditos</a></li>
                <li><a href='https://gitlab.com/xristian.oliveira/road-to-fullstack' className='ItemTexto'>Repositório</a></li>
                <li><a href='/about' className='ItemTexto'>Sobre</a></li>
            </ul>
        </header>
    )
}

export default Header;