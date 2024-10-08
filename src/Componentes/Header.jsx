import logo from '../img/fukusuke.jpg'
import '../css/header.css'

export function Header(){
    return <div className='general'>
        <header className='header'>
            <a href="" className='link-logo'><img src={logo} alt="logo" className="logo" /></a>
            <nav>
                <ul className="ref">
                    <li className='li'><a className='link' href="https://tinyurl.com/kk5j4bjy">Local</a></li>
                    <li className='li'><a href="" className='link'>Carta</a></li>
                    <li className='li'><a href="" className='link'>Carro</a></li>
                    <li className='li'><a href="" className='link'>Cuenta</a></li>
                </ul>
            </nav>
        </header>
    </div>
}
