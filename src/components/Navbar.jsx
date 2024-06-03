import { useSelector,useDispatch } from "react-redux";
import { clear } from "../features/cartSlice";

const Navbar = () => {
    const amount = useSelector(state => state.cart.products.reduce((acc, item) => acc + item.amount, 0));
    const dispatch = useDispatch();
    return (
        <div className="flex flex-row justify-evenly mt-2 pt-4 text-lg font-medium">
            <p>Home</p>
            <p>Cart
                <span className="text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">{amount}</span>
            </p>
            <button className="" onClick={()=>dispatch(clear())}>Clear</button>
        </div>
    );
}

export default Navbar;
