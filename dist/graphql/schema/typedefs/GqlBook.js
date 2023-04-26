import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
const GqlBook = new GraphQLObjectType({
    name: "Book",
    description: "Book type definition",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: "Book id",
        },
        title: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Book title",
        },
        author: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Book author",
        }
    })
});
export default GqlBook;
