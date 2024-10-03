import logo from './img/fukusuke.jpg'
import '../src/css/header.css'
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

export function Promos(props){
    return <div>
        <center>
            <div className="card">
                <h1>{props.titulo} </h1>
                <br/>
                <img src={props.img} alt="promo1" className="promo1" />
                <h2>Precio: {props.price} </h2>
                <div>
                    <button className="quantity-btn">-</button>
                    <input type="number" value="1" min="1" className="quantity-input"/>
                    <button className="quantity-btn" >+</button>
                </div>
            </div>
        </center>
    </div>
}

export function Productos(props){
    return <div>
        <center>
            <div className="card">
                <h1>{props.titulo} </h1>
                <br/>
                <img src={props.img} alt="p1" className="p1" />
                <h2>Precio: {props.price} </h2>
                <div>
                    <button className="quantity-btn">-</button>
                    <input type="number" value="1" min="1" className="quantity-input"/>
                    <button className="quantity-btn" >+</button>
                </div>
            </div>
        </center>
    </div>
}