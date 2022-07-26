import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import { Category, Product, Query } from './resolvers/index.js';
import { typeDefs } from './schema.js';
import { products, categories, reviews } from './mockdata/index.js'

async function startApolloServer(typeDefs, resolvers) {
    const app = express();

    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs,
        resolvers: {
            Query: Query,
            Category: Category,
            Product: Product
        },
        context: {
            products,
            categories,
            reviews
        },
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    server.applyMiddleware({ app });

    await new Promise(resolve => httpServer.listen({ port: 4001 }, resolve));

    console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`);
}

startApolloServer(typeDefs);