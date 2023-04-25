import { GraphQLObjectType } from "graphql";
import getAllBooksQuery from "./getAllBooksQuery";

const query = new GraphQLObjectType({
    name: "Query",
    description: "Root query",
    fields: () => ({
        books: getAllBooksQuery,
    }),
});

export default query;