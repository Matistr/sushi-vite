import { useEffect, useState } from 'react';

export function Carro() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Función para mostrar los elementos del carrito al cargar el componente
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
    }, []);

    // Función para eliminar un ítem del carrito
    const removeCartItem = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    // Función para vaciar el carrito
    const clearCart = () => {
        localStorage.removeItem('cart');
        setCartItems([]);
    };

    return (
        <div className="p-6 bg-gray-900 text-white rounded-lg">
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="cart-item flex justify-between p-4 rounded-md mb-4 bg-gray-800">
                            <div className="text-center flex-1">{item.nombre}</div>
                            <div className="text-center flex-1">Cantidad: {item.cantidad}</div>
                            <div className="text-center flex-1">Precio: ${item.precio * item.cantidad}</div>
                            <button 
                                className="delete-item-btn bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-800 transition-all"
                                onClick={() => removeCartItem(index)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))
                )}
            </div>
            <div className="text-center mt-6">
                <button 
                    className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-red-600 hover:shadow-lg transition-all"
                    onClick={clearCart}
                >
                    Vaciar Carrito
                </button>
            </div>
        </div>
    );
}