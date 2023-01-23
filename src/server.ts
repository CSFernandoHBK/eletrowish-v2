import express from "express"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import productsRouter from "./routers/products.router.js";

const app = express();
app.use(cors())
app.use(express.json())

app.use(productsRouter)

const port = process.env.PORT || 4500;
app.listen(port, () => console.log(`Server is running on port: ${port}`))