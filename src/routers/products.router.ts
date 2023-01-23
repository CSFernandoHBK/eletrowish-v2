import { Router } from "express";
import { getProduct, addProduct, removeProduct, updateProduct, getAllProduct } from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter
    .get("/products", getAllProduct)
    .get("/products/:id", getProduct)
    .post("/products", addProduct)
    .delete("/products/:id", removeProduct)
    .put("/products/:id", updateProduct)
    .get("/health", (req, res) => res.send("Tudo ok!"));

export default productsRouter;