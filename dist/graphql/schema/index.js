import { GraphQLSchema } from "graphql";
import query from "./resolvers/query";
const schema = new GraphQLSchema({
    query,
});
export default schema;
