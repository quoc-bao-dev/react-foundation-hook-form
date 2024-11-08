import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, TloginSchema } from "./schema/auth.schema";
import { IAccount, useAccount } from "./signal/account";

const LoginForm = () => {
    const { setAcount } = useAccount()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TloginSchema>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = (data: TloginSchema) => {
        console.log(data);

        const account: IAccount = {
            email: 'devlor@gmail.com',
            name: 'devlor',
            phone: '0123456789'
        }
        setAcount(account)
        // gui api
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 grid gap-4" >
            <h2 className="text-2xl font-medium text-gray-700">
                Login
            </h2>
            <div className="">
                <label htmlFor="" className="text-gray-700">User Name</label>
                <input
                    {...register("userName")}
                    type="text" className={` w-full p-2 rounded-lg border ${errors.userName ? 'border-red-500' : 'border-gray-300'}`} placeholder="User Name" />
                {errors.userName && <p className="text-red-500">{errors.userName.message}</p>}
            </div>

            <div className="">
                <label htmlFor="" className="text-gray-700">Password</label>
                <input
                    {...register('password')}
                    type="password" className={` w-full p-2 rounded-lg border ${errors.password ? 'border-red-500' : 'border-gray-300'}`} placeholder="Password" />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
        </form>
    )
}

export default LoginForm