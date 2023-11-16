const typeDefs = `
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

    input UserInput {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Auth {
        token: ID
    }

    type Query {
        me: User
    }

    type Mutation {
        signIn(user: UserInput!): Auth
        login(email: String!, password: String!): Auth 
    }
`;

module.exports = typeDefs;
