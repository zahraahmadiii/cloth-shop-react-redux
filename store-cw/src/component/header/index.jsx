import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import "./style.css"
const Header = ({ setShowCart }) => {
    const totalQuantity = useSelector(state => state.cart.cartTotalQuantity)
    return (
        <div className="header">
            <button onClick={() => setShowCart(false)} className="p-4">store</button>
            <button className="p-4">about</button>
            <button onClick={() => setShowCart(true)}><FaShoppingCart />cart ({totalQuantity})</button>
        </div>
    )
}

export default Header;