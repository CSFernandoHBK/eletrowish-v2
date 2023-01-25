import prisma from "../../database/db.js"
import { Product, ProductEntity } from "../../protocols/product.type";

export async function getAllProductsREP(): Promise<ProductEntity[]>{
    return (prisma.products.findMany()) 
}

export async function verifyProduct(id: number) {
    const product = await prisma.products.findUnique({
        where: {id: id}
    })
    return(product)
}

export async function addProductREP(product: Product){
    return prisma.products.create({
        data: product
    })
}

export async function updateProductREP(product: Product, id: number){
    return (
        prisma.products.upsert({
            where: {
                id: id
            },
            create: product,
            update: product
        })
    )
}

export async function deleteProductREP(id: number){
    return prisma.products.delete({
        where:{
            id: id
        }
    })
}