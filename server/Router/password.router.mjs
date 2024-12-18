import Router from "express"
import controller from "../controller/password.controller.mjs"

const passwordRouter = Router()

passwordRouter.post("/generate", controller.generatePasswordHash)
passwordRouter.post("/verify", controller.verifyPasswordHash)

export default passwordRouter