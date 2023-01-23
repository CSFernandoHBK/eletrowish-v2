import connectionDB from "../../database/db.js";
import { Product } from "../../protocols/product.type";

export async function getAllProductsREP(){
    const promise = await connectionDB.query(`
        SELECT * FROM products
        `)
    const lista: Product[] = promise.rows
    return (lista) 
}

export async function verifyProduct(id: number): Promise<Product>{
    const product = await connectionDB.query(`
    SELECT * FROM products WHERE id=$1
    `, [id])
    return(product.rows[0])
}

export async function addProductREP(){
    
}