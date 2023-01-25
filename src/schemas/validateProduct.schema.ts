import joi from "joi";

export const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().integer().required(),
    store: joi.string().required(),
    target_date: joi.date().required()
})