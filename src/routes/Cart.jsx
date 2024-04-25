import { useState, useEffect } from 'react';
import { useCart } from "./CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import '../styles/Cart.css';
import InputGroup from "../components/InputGroup.jsx";
function Cart() {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, emptyCart } = useCart();

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
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setAggregatedCartItems(aggregateCartItems(cartItems));
        setTotalPrice(Math.round(cartItems.reduce((total, item) => total + item.price, 0) * 100) / 100);
    }, [cartItems]);

    function deleteItem(id) {
        removeFromCart(id);
    }

    function fakeCheckout(e) {
        e.preventDefault();
        emptyCart();
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
            <div className={'cart-left'}>
                <form id={'credit-card-form'}>
                    <InputGroup id={'Credit Card Number'} placeholder={'1234 5678 9012 3456'} type={'text'} labelText={'Credit Card Number'} />
                    <div className={'credit-card-infos'}>
                        <InputGroup id={'expiration-date'} placeholder={'MM/YY'} type={'text'} labelText={'Expiration Date'} />
                        <InputGroup id={'CVV'} placeholder={'123'} type={'text'} labelText={'CVV'} />
                    </div>
                    <InputGroup id={'name-on-card'} placeholder={'John Doe'} type={'text'} labelText={'Name on Card'} />
                    <InputGroup id={'address'} placeholder={'1234 Main St'} type={'text'} labelText={'Address'} />
                    <InputGroup id={'zip-code'} placeholder={'12345'} type={'text'} labelText={'Zip Code'} />

                    <button className={'checkout'} type={'submit'} onSubmit={() => fakeCheckout()}>Proceed to checkout</button>
                </form>
            </div>
            <div className='cart-items'>
                {aggregatedCartItems.length === 0 ? (
                    <p>There's no products in there!</p>
                ) : (
                    aggregatedCartItems.map((item) => (
                        <CartItem key={item.id} item={item} deleteItem={deleteItem} changeQuantity={changeQuantity} />
                    ))
                )}
                <p className='total-price'>Total Price: ${totalPrice}</p>
            </div>
        </div>

    )
}

export default Cart;