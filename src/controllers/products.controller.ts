import { Request, Response } from "express";
import connectionDB from "../database/db.js"
import {productSchema} from "../schemas/validateProduct.schema.js" 
import { Product } from "../protocols/product.type";

async function getProduct(req: Request, res: Response){
    const {id} = req.params;

    try{
        const lista = await connectionDB.query(`
            SELECT * FROM products
        `)
        return res.send(lista.rows)

    } catch(err){
        console.log(err)
        return res.status(500).send(err.message);
    }
}

async function addProduct(req: Request, res: Response){
    const {name, price, store, target_date} = req.body; 

    const validation = productSchema.validate(req.body, {abortEarly: true})

    if (validation.error) {
        return res.status(400).send(validation.error.details[0].message)
    }

    try{
        await connectionDB.query(`
        INSERT INTO products (name, price, store, target_date) values ($1, $2, $3, $4)
        `, [name, price, store, target_date])

        return res.send(`added product ${name}`)
    } catch(err){
        console.log(err)
        return res.status(500).send(err.message);
    }
}

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
        const product = await connectionDB.query(`
        SELECT * FROM products WHERE id=$1
        `, [id])

        if(!product.rows[0]){
            return res.status(404).send("Product not found!")
        }

        await connectionDB.query(`
        UPDATE products SET name=$1, price=$2, store=$3, target_date=$4 WHERE id=$5
        `, [name, price, store, target_date, id])

        return res.status(200).send(`Product id ${id} updated!`)

    } catch(err){
        console.log(err)
        return res.status(500).send(err.message);
    }
}

export{
    getProduct,
    removeProduct,
    addProduct,
    updateProduct
}
