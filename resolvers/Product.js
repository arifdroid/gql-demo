const Product = {
    category: (parent, args, { categories }) => {
        return categories.find(el => el.id === parent.categoryId)
    },
    reviews: ({ id }, args, { reviews }) => {
        return reviews.filter(el => el.productId === id)
    }
}

export { Product };