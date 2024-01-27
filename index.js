import express from "express"
import { router } from "./src/backend/api/hello/route.js"

const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(3000,() => console.log("listening on port 3000"))
app.use(router)

