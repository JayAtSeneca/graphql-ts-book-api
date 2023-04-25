import { GraphQLList } from "graphql";
import GqlBook from "../../typedefs/GqlBook";
import { Book } from "../../../../data/types/Book";

const books: Book[] = [
    {
        id: "1",
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
    },
    {
        id: "2",
        title: "Jurassic Park",
        author: "Michael Crichton",
    },
];

const getAllBooksQuery = {
    type: new GraphQLList(GqlBook),
    description: "Get all books",
    resolve: () => books,
};

export default getAllBooksQuery;