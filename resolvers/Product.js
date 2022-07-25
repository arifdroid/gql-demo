import { categories } from "../mockdata/index.js";

const Product = {
    category: (parent, args, context) => {
        return categories.find(el => el.id === parent.categoryId)
    }
}

export { Product };