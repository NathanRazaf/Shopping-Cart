import { useState, useEffect } from 'react';
import { useCart } from "./CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import '../styles/Cart.css';
function Cart() {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

    function aggregateCartItems(cartItems) {
        const aggregatedCartItems = {};
        cartItems.forEach((item) => {
            if (aggregatedCartItems[item.id]) {
                aggregatedCartItems[item.id].quantity++;
            } else {
                aggregatedCartItems[item.id] = {
                    ...item,
                    quantity: 1,
                };
            }
        })
        return Object.values(aggregatedCartItems);
    }
    const [aggregatedCartItems, setAggregatedCartItems] = useState([]);
    useEffect(() => {
        setAggregatedCartItems(aggregateCartItems(cartItems));
    }, [cartItems]);

    function deleteItem(id) {
        removeFromCart(id);
    }

    function changeQuantity(id, operation) {
        if (operation === 'add') {
            incrementQuantity(id);
        } else {
            decrementQuantity(id);
        }
    }


    return (
        <div className='cart'>
            <h1>Cart</h1>
            {aggregatedCartItems.length === 0 ? (
                <p>There's no products in there!</p>
            ) : (
                aggregatedCartItems.map((item) => (
                    <CartItem key={item.id} item={item} deleteItem={deleteItem} changeQuantity={changeQuantity} />
                ))
            )}
        </div>

    )
}

export default Cart;