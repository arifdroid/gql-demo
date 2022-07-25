import { products } from "../mockdata/index.js";


const Category = {
    products: (parent, args, context) => {

        const categoryId = parent.id
        return products.filter(product => product.categoryId === categoryId)
        //we want to associate product to category , so 
        //we want to have foreign id of category in products


        // return null
    }
}

export { Category };