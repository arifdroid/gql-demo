

const Query = {
    hello: () => { return "hello world" },
    products: (parent, { filter }, { products, reviews }) => {

        if (!filter) return products;

        let filterProducts = products;

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
                reviews.forEach(review => {
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