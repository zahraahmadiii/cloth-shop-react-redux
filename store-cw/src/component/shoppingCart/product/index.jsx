import { FaShoppingCart } from "react-icons/fa"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from "react-redux"
import { addToCart, deleteFromCart } from "../../../redux/features/cartSlice" 

const Product = ({product}) => {

    const dispatch = useDispatch()

    const increaseQuantity = (item) => {
         dispatch(addToCart(item))
    }

    const deleteProduct = (item) => {
        dispatch(deleteFromCart(item))
    }

    return (
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img alt="Sour Puss Raspberry" src={product.img} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.title}</h5>
                <p className="mb-1">Price: ${product.price} </p>
            </div>
            <div className="col-sm-2 p-2 text-center ">
                <p className="mb-0">Qty: {product.quantity}</p>
            </div>
            <div className="col-sm-4 p-2 text-right">
                <button className="btn btn-primary btn-sm mr-2 mb-1" onClick={() => increaseQuantity(product)}>
                    <svg width="20px" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                </button>
                <button className="btn btn-danger btn-sm mb-1" onClick={()=>deleteProduct(product)}>
                    <svg width="20px" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" fillRule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Product;