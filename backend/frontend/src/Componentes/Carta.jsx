import PropTypes from 'prop-types';
import '../css/header.css';

function increaseQuantity(e) {
    const promoItem = e.target.closest('.card');
    const input = promoItem.querySelector('.quantity-input');
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(e) {
    const promoItem = e.target.closest('.card');
    const input = promoItem.querySelector('.quantity-input');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}


function addToCart(productName, price, e) {
    const promoItem = e.target.parentElement;
    const quantityInput = promoItem.querySelector('.quantity-input');
    const quantity = parseInt(quantityInput.value);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(item => item.nombre === productName);

    if (existingProductIndex >= 0) {
        cart[existingProductIndex].cantidad += quantity;
    } else {
        const formattedPrice = parseFloat(price.replace('$', '').replace('.', ''));
        
        cart.push({
            nombre: productName,
            precio: formattedPrice,
            cantidad: quantity
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showConfirmationMessage();
}

function showConfirmationMessage() {
    const messageElement = document.getElementById('confirmation-message');
    
    if (messageElement) {
        messageElement.style.display = 'block';
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 2000);
    } else {
        console.error('Elemento de mensaje de confirmación no encontrado.');
    }
}

export function ItemCard({ titulo, img, altText, price }) {
    return (
        <div className="card">
            <h1>{titulo}</h1>
            <br />
            <img src={img} className="productos" alt={altText} />
            <h2>Precio: {price}</h2>
            <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
            <input type="number" defaultValue="1" className="quantity-input" />
            <button className="quantity-btn" onClick={increaseQuantity}>+</button>
            <button
                className="add-to-cart-btn"
                onClick={(e) => {
                    addToCart(titulo, price, e);
                }}
            >
                Agregar al carrito
            </button>
            <div id="confirmation-message" style={{ display: 'none', color: 'green', marginTop: '10px' }}>
                ¡Producto añadido al carrito!
            </div>
        </div>
    );
}

ItemCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};