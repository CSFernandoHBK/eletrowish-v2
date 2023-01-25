import prisma from "../../database/db.js"
import { Product } from "../../protocols/product.type";

export async function getAllProductsREP(){
    return (prisma.products.findMany()) 
}

/*export async function verifyProduct(id): {
    const product = await prisma.products.findUnique()
    return()
}*/

export async function addProductREP(product: Product){
    return prisma.products.create({
        data: product
    })
}