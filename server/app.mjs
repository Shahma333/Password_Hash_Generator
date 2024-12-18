import express from "express"
import cors from "cors"
import env from "dotenv"
env.config()

import connectDB from "./config/db.config.mjs"
import passwordRouter from "./Router/password.router.mjs"

const app = express()
await connectDB()

app.use(express.json())
app.use(cors())


app.use("/password",passwordRouter)

app.listen(process.env.PORT, (error) => {
    if (error) {
        return process.exit(1)
    }
    console.log("Server running on port", process.env.PORT)
})