import { Router } from "express"
import userRouter from "./userRouter.js"

export const mainRouter = Router()

mainRouter.use(userRouter)