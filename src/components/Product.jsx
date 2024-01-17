const Product = ({data}) =>{
    return(
        <div className="flex flex-row items-center gap-8 px-10 my-5 ">
             <img src={data.image} alt={data.name} className="w-40" />

            <div className="w-1/2 px-10">
                <p className="text-xl font-medium">{data.name}</p>
                <p className="text-lg ">{data.price.toFixed(2)} $</p>
            </div>

            <div className="flex flex-col items-center">
                <p className="text-lg font-medium">Amount</p>
                <p>{data.amount} </p>
            </div>
        </div>
    )
}
export default Product