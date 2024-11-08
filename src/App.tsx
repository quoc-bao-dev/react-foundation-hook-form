import LoginForm from "./LoginForm";
import Product from "./Product";
import { sAccount, useAccount } from "./signal/account";
import { IProduct, sProduct, useProduct } from "./signal/products";

const App = () => {
  const { removeAccount } = useAccount()
  const { addProduct } = useProduct()

  const handleAddProduct = () => {
    const product: IProduct = {
      name: 'Product 6',
      price: 60
    }

    addProduct(product)
  }

  return (
    <div>
      <h1 className="font-bold text-3xl text-center bg-blue-50 p-4 text-blue-500">
        React Hook Form
      </h1>

      <div className="py-2 shadow px-16">

        <sAccount.Wrap>
          {(account) => {
            if (account.name) return (
              <div>
                <p className="text-red-500">Hello {account.name}</p>
                <button onClick={removeAccount}>Logout</button>
              </div>
            )
            return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Login</button>
          }}
          {/* JSX */}
        </sAccount.Wrap>
      </div>

      <div className="mt-6 flex justify-center">
        {/* <div className="p-4 rounded-lg shadow border border-gray-300">
          <LoginForm />
        </div> */}

      </div>
      <div className="mt-6 px-16">
        <div className="py-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={handleAddProduct}>Add Product</button>
        </div>
        <Product />
      </div>
      <sProduct.DevTool name="sProduct" />
    </div>
  )
}

export default App