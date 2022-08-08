import { gql } from 'apollo-server-core'

const typeDefs = gql`
type Query{
    hello:String!
    products(filter:ProductFilterInput):[Product!]
    product(id:String!):Product
    categories:[Category!]!
    category(id:ID!): Category
}

type Product{
    id:String!
    name:String!
    description:String!
    quantity:Int!
    price:Float!
    image:String!
    onSale:Boolean!
    category:Category!
    reviews:[Review!]!
}

type Category{
    id:ID!
    name:String!
    products(filter:ProductFilterInput):[Product!]! 
}

type Review{
    id:ID!
    date:String!
    title:String!
    comment:String!
    rating:Int!


}

input ProductFilterInput{
    onSale:Boolean
    avgRating:Int 
}

`

// notice we dont add productId to Review schema type since it is not necessary
// input use for filtering the query

export { typeDefs };