const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Skill {
    _id: ID
    skillName: String
  }

  type Auth {
    token: ID
  }

  type Query {
    user: User
  }

  type Mutation {
    signin(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSkills(skillName: String!): User
    removeSkill(skillName: String!): User
  }
`;

module.exports = typeDefs;
