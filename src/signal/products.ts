import { signify } from "react-signify";

export interface IProduct {
    name: string
    price: number
}

export const sProduct = signify<IProduct[]>([])
export const useProduct = () => {
    return {
        setProduct: (product: IProduct[]) => {
            sProduct.set(product)
        },
        addProduct: (product: IProduct) => {
            sProduct.set(pre => pre.value = [...pre.value, product])
        },
        removeProduct: (index: number) => {
            sProduct.set(pre => pre.value = [...pre.value.slice(0, index), ...pre.value.slice(index + 1)])
        }
    }
}