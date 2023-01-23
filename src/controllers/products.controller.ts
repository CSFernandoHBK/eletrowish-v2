import { Request, Response } from "express";
import connectionDB from "../database/db.js"

export async function getProduct(req: Request, res: Response){
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
    
}

async function updateProduct(req: Request, res: Response){
    
}

export{
    removeProduct,
    addProduct,
    updateProduct
}
