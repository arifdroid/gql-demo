import { v4 as uuid } from 'uuid'


const Mutation = {
    addCategory: (parent, { input }, { db }) => {
        const { name } = input;
        const newCategory = {
            id: uuid(),
            name
        }

        db.categories.push(newCategory)

        return newCategory
    },

    addProduct: (parent, { input }, { db }) => {
        const newProduct = {
            id: uuid(),
            ...input
        }

        db.products.push(newProduct)

        return newProduct
    },

    deleteCategory: (parent, { id }, { db }) => {
        db.categories = db.categories.filter((category) => category.id !== id)
        db.products = db.products.map(product => {
            if (product.categoryId === id) return {
                ...product,
                categoryId: null
            }
            else return product;
        })

        return true
    },

    deleteProduct: (parent, { id }, { db }) => {
        db.products = db.products.filter(product => product.id != id);
        db.reviews = db.reviews.filter(review => review.productId != id);

        return true;
    },

    deleteReview: (parent, { id }, { db }) => {
        db.reviews = db.reviews.filter(review => review.id != id);

        return true;
    },


}

export { Mutation }