import { categories, products } from "../mockdata/index.js";

const Query = {
    hello: () => { return "hello world" },
    products: () => products,
    product: (parent, { id }, context) => {
        const product = products.find(prod => prod.id === id)
        if (!product) return null
        else return product;
    },
    categories: () => categories,
    category: (parent, { id }, context) => {
        return categories.find(cat => cat.id === id)
    }

}

export { Query }