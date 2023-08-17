import CartIcon from "../Cart/CartIcon";
import {useContext,useEffect,useState} from 'react'
import cartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css'
const HeaderCartButton=(props)=>{
   const [btnIsHighlighted,setBtnIsHighlighted]= useState(false);
  const cartCtx=  useContext(cartContext);
  const numberOfCartItems=cartCtx.items.reduce((currNum,item)=>{
    return currNum+item.amount;

  },0);

  const {items}=cartCtx

const btnClasses=`${classes.button} ${btnIsHighlighted? classes.bump:''}`;
useEffect(()=>{
    if(items.length===0)
    {
return;
    }
setBtnIsHighlighted(true);
setTimeout=(()=>{
setBtnIsHighlighted(false);
},300)
},[items])
return <button className={btnClasses} onClick={props.onClick}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
</button>
}
export default HeaderCartButton;