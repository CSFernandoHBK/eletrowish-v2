import { Request, Response } from "express";
import connectionDB from "../database/db.js"
import {productSchema} from "../schemas/validateProduct.schema.js" 
import { addProductREP, getAllProductsREP, updateProductREP, verifyProduct } from "../repositories/products.repository/products.repository.js";
import { ProductEntity } from "src/protocols/product.type.js";

async function getAllProduct(req: Request, res: Response){
    try{
        const lista = await getAllProductsREP();
        return res.send(lista) 
    } catch(err){
        console.log(err)
        return res.status(500).send(err.message);
    }
}

async function getProduct(req: Request, res: Response){
    const {id} = req.params;

    try{
        const product = await verifyProduct(Number(id))
        if(!product){
            return res.status(404).send("Product not found!")
        }
        return res.send(product)
    } catch(err){
        console.log(err)
        return res.status(500).send(err.message);
    }
}



async function addProduct(req: Request, res: Response){
    const validation = productSchema.validate(req.body, {abortEarly: true})

    if (validation.error) {
        return res.status(400).send(validation.error.details[0].message)
    }

    try{
        await addProductREP(req.body)
        return res.status(201).send(`Added product: ${req.body.name}`)
    } catch(err){
        console.log(err)
        return res.status(500).send(err.message);
    }
}
/*
async function removeProduct(req: Request, res: Response){
    const {id} = req.params;

    if(!id){
        return res.status(400).send("id is required")
    }

    try{
        const product = await connectionDB.query(`
        SELECT * FROM products WHERE id=$1
        `, [id])

        if(!product.rows[0]){
            return res.status(404).send("Product not found!")
        }

        await connectionDB.query(`
        DELETE FROM products WHERE id=$1
        `, [id])
        
        return res.status(200).send(`Product ${product.rows[0].name} removed!`)
    } catch(err){
        console.log(err)
        return res.status(500).send(err.message);
    }
}
*/
async function updateProduct(req: Request, res: Response){
    const {name, price, store, target_date} = req.body;
    const {id} = req.params;

    if(!id){
        return res.status(400).send("id is required")
    }

    const validation = productSchema.validate(req.body, {abortEarly: true})

    if (validation.error) {
        return res.status(400).send(validation.error.details[0].message)
    }

    try{
        /*const product = await connectionDB.query(`
        SELECT * FROM products WHERE id=$1
        `, [id])

        if(!product.rows[0]){
            return res.status(404).send("Product not found!")
        }*/

        await updateProductREP(req.body, Number(id))

        return res.status(200).send(`Product id ${id} updated!`)

    } catch(err){
        console.log(err)
        return res.status(500).send(err.message);
    }
}



export{
    getAllProduct,
    getProduct,
    /*removeProduct,*/
    addProduct,
    updateProduct
}
