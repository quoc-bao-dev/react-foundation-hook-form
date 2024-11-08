
import { useEffect } from "react"
import { IProduct, sProduct, useProduct } from "./signal/products"

const mockData: IProduct[] = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
    { name: 'Product 4', price: 40 },
    { name: 'Product 5', price: 50 },
]

const Product = () => {
    const { setProduct, removeProduct } = useProduct()

    useEffect(() => {
        setTimeout(() => {
            setProduct(mockData)
        }, 2000)
    }, [])
    return (
        <sProduct.Wrap>
            {(product) => {
                if (product.length === 0) return (
                    <p className="text-gray-600 text-3xl p-6 text-center">
                        Loading...
                    </p>
                )

                return (
                    <div className=" grid gap-4 grid-cols-4">
                        {
                            product.map((item, index) => (
                                <div className="p-4 rounded-lg shadow border border-gray-300" key={index}>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded " onClick={() => removeProduct(index)}>remove</button>
                                    <p className="text-gray-700 text-2xl">{item.name}</p>
                                    <p>${item.price}</p>
                                </div>
                            ))
                        }
                    </div>
                )

            }}
        </sProduct.Wrap>
    )
}

export default Product