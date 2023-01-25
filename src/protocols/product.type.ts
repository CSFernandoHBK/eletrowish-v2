export type ProductEntity = {
    id: number,
    name: string,
    price: number,
    store: string,
    target_date: Date
}

export type Product = Omit<ProductEntity, "id"> 

export type ProductUpdate = Partial<ProductEntity>