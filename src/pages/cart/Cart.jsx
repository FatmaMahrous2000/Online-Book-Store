import { useContext } from "react";
import {cartInfo} from "../../data/cart"
import "./Cart.css"
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import cartContext from "../../components/context/CartContext";
const Cart = () => {

  const {cartItems,removeFromCart,addToCart}=useContext(cartContext)
    const totalPrice=cartItems.reduce((acc,cur)=>acc+cur.price*cur.quantity,0).toFixed(2)
    
    return ( 
        <div className="cart">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <div className="cart-wrapper">
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem item={item} removeFromCart={removeFromCart} addToCart={addToCart}/>
            ))}
          </div>
          <OrderSummary totalPrice={totalPrice}/>
        </div>
      </div>
    );
  };
    

 
export default Cart;