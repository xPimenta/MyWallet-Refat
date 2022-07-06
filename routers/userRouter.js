import { Router } from "express"
import { SignUpUser, SignInUser } from "../controllers/userController.js"

const userRouter = Router()

authRouter.post("/sign-up", SignUpUser)
authRouter.post("/sign-in", SignInUser)

export default userRouter