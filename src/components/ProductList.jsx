import { useSelector } from "react-redux"
import Product from "./Product"
const ProductList = () =>{
    const {products,total} = useSelector(state =>state.cart)
    return (
        <div className="py-4">
            <div>
                {
                    products.map((item)=>(
                        <Product key={self.crypto.randomUUID()} data={item}/>
                        ))
                }
            </div>
            <div className="flex flex-row items-center justify-evenly">
                <p className="text-2xl font-medium">Total</p>
                <p className="text-2xl font-medium mt-4 py-5">${total}</p>
            </div>

        </div>
    )
}

export default ProductList