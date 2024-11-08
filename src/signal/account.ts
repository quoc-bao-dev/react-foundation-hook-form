import { signify } from "react-signify"

export interface IAccount {
    name: string
    email: string
    phone: string
}

export const sAccount = signify<IAccount>({
    email: '',
    name: '',
    phone: ''
})

export const useAccount = () => {
    return {
        setAcount: (account: IAccount) => {
            sAccount.set(account)
        },
        removeAccount: () => {
            sAccount.set({
                email: '',
                name: '',
                phone: ''
            })
        }

    }
}