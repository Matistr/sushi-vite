import '../css/header.css'
import PropTypes from 'prop-types';

function increaseQuantity(e) {
    const input = e.target.previousElementSibling;
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(e) {
    const input = e.target.previousElementSibling;
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
        cart.push({
            nombre: productName,
            precio: price,
            cantidad: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));

    showConfirmationMessage();
}

function showConfirmationMessage() {
    const messageElement = document.getElementById('confirmation-message');
    messageElement.style.display = 'block';
    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 2000);
}

export function ItemCard(props) {
    return (
        <div className="card">
            <h1>{props.titulo}</h1>
            <br />
            <img src={props.img} className="productos" alt={props.altText} />
            <h2>Precio: {props.price}</h2>
            <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
            <input type="number" defaultValue="1" className="quantity-input" />
            <button className="quantity-btn" onClick={increaseQuantity}>+</button>
            <button
                className="add-to-cart-btn"
                onClick={(e) => {
                    const quantityInput = e.target.parentElement.querySelector('.quantity-input');
                    const quantity = parseInt(quantityInput.value);
                    addToCart(props.titulo, props.price, quantity, e);
                }}
            >
                Agregar al carrito
            </button>
        </div>
    );
}

ItemCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
};
