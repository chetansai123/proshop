import * as ProductService from "../services/ProductService.js";

export const getProducts = async (req, res, next) => {
    const products = await ProductService.getProducts();
    if (products?.length > 0) {
        res.json(products);
    } else {
        res.status(404);
        throw new Error('Products Not Found!');
    }
    next();
}
export const getProduct = async (req, res, next) => {
    const id = req?.params?.id;
    const product = await ProductService.getProduct(id);
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product Not Found!');
    }
    next();
}