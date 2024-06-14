import { Product } from "../models/index.js"

export async function getProducts() {
    const products = await Product.find({});
    return products;
}
export async function getProduct(productId) {
    const product = await Product.findById(productId);
    return product;
}