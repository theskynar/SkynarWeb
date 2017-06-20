import * as http from "http"
import * as dotenv from "dotenv"
import "reflect-metadata"

import app from "./config/routes"
import db from "./config/db"
dotenv.config()

const port = process.env.PORT

http.createServer(app).listen(port, () => console.log(`Server is running in ${port} port`))