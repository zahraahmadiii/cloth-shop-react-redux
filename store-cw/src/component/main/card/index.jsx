import { useDispatch } from "react-redux"
import { addToCart } from "../../../redux/features/cartSlice"
import "./style.css"

const Card = ({item}) => {

// const cartItems = useSelector((state) => 
//     state.cart.cartItems
// )

// const item  = {
//     name: "shirt",
//     id:1,
//     price:10,
// }

// useEffect(()=> console.log(cartItems),[cartItems])
const dispatch = useDispatch()
return (
<div className="card card-body">
    <img className="img-fluid" src={item.img} alt="" />
    <p>{item.title}</p>
    <h3 className="text-left">{item.price}</h3>
    <div className="text-right">
        <button>Details</button>
        <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
    </div>
</div>
)
}

export default Card;