import { Router } from "express";
import { getProduct, addProduct, removeProduct, updateProduct } from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter
    .get("/products", getProduct)
    .post("/products", addProduct)
    .delete("/products", removeProduct)
    .put("/products", updateProduct)
    .get("/health", (req, res) => res.send("Tudo ok!"));

export default productsRouter;