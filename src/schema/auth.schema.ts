import { z } from "zod";

export const loginSchema = z.object({
    userName: z.string().min(5, "Phai nhap 5 ky tu").max(20),
    password: z.string().min(5).max(20)
})

export type TloginSchema = z.infer<typeof loginSchema>