const Product = {
    category: (parent, args, { db }) => {
        return db.categories.find(el => el.id === parent.categoryId)
    },
    reviews: ({ id }, args, { db }) => {
        return db.reviews.filter(el => el.productId === id)
    }
}

export { Product };