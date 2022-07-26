
const Category = {
    products: (parent, args, { products }) => {
        const categoryId = parent.id
        return products.filter(product => product.categoryId === categoryId)
    }
}

export { Category };