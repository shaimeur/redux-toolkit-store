const Product = ({data}) =>{
    return(
        <div className="flex flex-row items-center gap-8 px-10 my-5 ">
             <img src={data.image} alt={data.name} className="w-40" />

            <div className="w-1/2 px-10">
                <p className="text-xl font-medium">{data.name}</p>
                <p className="text-lg tracking-wide">{data.price.toFixed(2)} $</p>
                <button className="text-red-600 tracking-wide pt-1 pb-3">Remove</button>
            </div>

            <div className="flex flex-col items-center">
                <p className="text-lg font-medium">Amount</p>
                <div className="flex flex-row items-center gap-4 text-gray-500 font-medium">
                    <button className="text-xl">-</button>
                    <p>{data.amount} </p>
                    <button className="text-xl">+</button>
                </div>
            </div>
        </div>
    )
}
export default Product