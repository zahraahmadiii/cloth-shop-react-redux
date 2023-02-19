import { FaShoppingCart } from "react-icons/fa"
import Card from "./card";
import Search from "./search";
import "./style.css"
import { Products } from "../../data";
import ShoppingCart from "../shoppingCart";
import { useState } from "react";
const Main = ({ showCart, setShowCart }) => {



    const [filterProducts, setFilterProducts] = useState(Products)

    const filterProductsHandler = (searchValue) => {
        const newProducts = Products.filter((val) => val.title.toLowerCase().includes(searchValue.toLowerCase()))
        setFilterProducts(newProducts)
    }

    // console.log(Products);

    return (
        <div className="container">


            {!showCart ?
                <div>
                    <div className="text-center">
                        <h1>Store</h1>
                        <p>This is a store page</p>
                    </div>
                    <Search onFilterHandler={filterProductsHandler} />
                    <div className="cards-container">
                        {
                            filterProducts.map((product) => <Card key={product.id} item={product} />)
                        }
                    </div>
                </div> :
                <ShoppingCart />
            }






        </div>
    )
}

export default Main;