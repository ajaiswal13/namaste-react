import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    return cartItems.length==0 ? <h1>Cart is empty</h1> : (
     <div className="text-center p-5 m-5">
            <h1 className="font-bold text-xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="bg-gray-950 text-white p-2 m-2 rounded-md"
                    onClick={() => dispatch(clearCart())}>
                    Clear Cart
                </button>
                    {cartItems.map(item => <ItemList item={item} />)}
            </div>
      </div>
   )
}

export default Cart;