import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import {useContext} from 'react';
import CartItem from './CartItem';
import cartContext from '../../store/cart-context';
const Cart=(props)=>{
    const CartCtx=useContext(cartContext);

    const totalAmount=`$${CartCtx.totalAmount.toFixed(2)}`;
    const hasItems=CartCtx.items.length>0;

const cartItemAddHandler=(item)=>{
CartCtx.addItem(item);
}
const cartItemRemoveHandler=(id)=>
{
CartCtx.removeItem(id);
}



    const CartItems=(<ul className={classes['cart-items']}>{CartCtx.items.map(item=>{
       return <CartItem  id={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}></CartItem>
    })}
    </ul>);
return <Modal onClose={props.onClose}>
    {CartItems}
    <div className={classes.total}>
    <span>Total Amount</span>
    <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button style={{backgroundColor:"#8a2b06",color: "white"}}>Order</button>}
    </div>
</Modal>
}

export default Cart;