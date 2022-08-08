
const Category = {
    products: (parent, { filter }, { db }) => {
        const categoryId = parent.id

        let productByCategory = null;

        if (!filter) {

            productByCategory = db.products.filter(product => product.categoryId === categoryId)
            return productByCategory
        }



        if (filter.onSale && productByCategory) {
            return productByCategory.filter((product) => {
                return product.onSale
            })
        }


    }
}

export { Category };