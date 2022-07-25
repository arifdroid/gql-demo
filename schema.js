import { gql } from 'apollo-server-core'

const typeDefs = gql`
type Query{
    hello:String!
    products:[Product!]
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
}

type Category{
    id:ID!
    name:String!
    products:[Product!]! 
}
`

export { typeDefs };