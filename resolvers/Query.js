
const Query = {
    hello: () => { return "hello world" },
    products: (parent, args, { products }) => products,
    product: (parent, { id }, { categories, products }) => {
        const product = products.find(prod => prod.id === id)
        if (!product) return null
        else return product;
    },
    categories: (parent, args, { categories }) => categories,
    category: (parent, { id }, { categories }) => {
        return categories.find(cat => cat.id === id)
    }

}

export { Query }