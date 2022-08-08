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
        // const { name, image, price, onSale, quantity, categoryId } = input;
        const newProduct = {
            id: uuid(),
            ...input
        }

        db.products.push(newProduct)

        return newProduct
    },

    deleteCategory: (parent, { id }, { db }) => {

    }


}

export { Mutation }