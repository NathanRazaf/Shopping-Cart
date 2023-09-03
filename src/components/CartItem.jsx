import { useState } from "react";
import Icon from '@mdi/react';
import { mdiMinusBox,mdiPlusBox,mdiTrashCan } from '@mdi/js';
import '../styles/CartItem.css'


function CartItem({item, deleteItem, changeQuantity}) {
    return (
        <div key={item.id} className='cart-item'>
            <img src={item.image} alt={item.name} />
            <div className={'cart-item-right'}>
                <h2 className={'cart-item-name'}>{item.name}</h2>
                <p className={'cart-item-price'}>Price: ${item.price}</p>
            </div>
            <div className={'cart-item-quantity'}>
                <button className={'delete-item'} onClick={() => deleteItem(item.id)}>
                    <Icon path={mdiTrashCan} size={1} color={'orange'}/>
                </button>
                <div className={'item-counter'}>
                    <button className={'item-counter-button'} onClick={() => changeQuantity(item.id, 'remove')}>
                        <Icon path={mdiMinusBox} size={1} color={'orange'}/>
                    </button>
                    <p className={'item-counter-quantity'}>{item.quantity}</p>
                    <button className={'item-counter-button'} onClick={() => changeQuantity(item.id, 'add')}>
                        <Icon path={mdiPlusBox} size={1} color={'orange'}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem