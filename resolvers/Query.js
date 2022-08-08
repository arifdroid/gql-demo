

const Query = {
    hello: () => { return "hello world" },
    products: (parent, { filter }, { db }) => {

        if (!filter) return db.products;

        let filterProducts = db.products;

        const { onSale, avgRating } = filter;

        if (onSale == true) {
            filterProducts = filterProducts.filter(product => {
                return product.onSale
            })
        }

        if (avgRating && [1, 2, 3, 4, 5].includes(avgRating)) {
            filterProducts = filterProducts.filter(product => {
                let sumRating = 0;
                let numberOfReviews = 0;
                db.reviews.forEach(review => {
                    if (review.productId === product.id) {
                        sumRating += review.rating
                        numberOfReviews++;
                    }
                })

                const avgProductRating = sumRating / numberOfReviews
                return avgProductRating >= avgRating;
            })
        }

        return filterProducts;


    },
    product: (parent, { id }, { db }) => {
        const product = db.products.find(prod => prod.id === id)
        if (!product) return null
        else return product;
    },
    categories: (parent, args, { db }) => db.categories,
    category: (parent, { id }, { db }) => {
        return db.categories.find(cat => cat.id === id)
    }

}

export { Query }