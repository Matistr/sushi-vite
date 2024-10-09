import { useEffect, useState } from 'react';
import '../css/carro.css';

export function Carro() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
    }, []);

    const removeCartItem = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    const clearCart = () => {
        localStorage.removeItem('cart');
        setCartItems([]);
    };

    return (
        <div className="p-6 bg-gray-900 text-white rounded-lg cart-container">
            <h2 className="text-2xl font-bold text-center mb-6">Carrito de Compras</h2>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p className="text-center text-lg">Tu carrito está vacío.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="cart-item flex justify-between p-4 rounded-md mb-4 bg-gray-800 shadow-lg transition-transform transform hover:scale-105">
                            <div className="text-center flex-1 item-name">{item.nombre}</div>
                            <div className="text-center flex-1">Cantidad: <span className="font-semibold">{item.cantidad}</span></div>
                            <div className="text-center flex-1">Precio: ${item.precio * item.cantidad}</div>
                            <button 
                                className="delete-item-btn bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700 transition-all"
                                onClick={() => removeCartItem(index)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="text-center mt-6">
                    <button 
                        className="clear-cart-btn bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-red-600 hover:shadow-lg transition-all"
                        onClick={clearCart}
                    >
                        Vaciar Carrito
                    </button>
                </div>
            )}
        </div>
    );
}
