const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    bio: String
    profilePic: String
    isDev: Boolean
    savedSkills: [Skill]
    savedProjects: [Project]
  }

  type Skill {
    _id: ID
    skillName: String
  }

  type Project {
    _id: ID
    projectName: String
    projectDescription: String
    projectUrl: String
    projectRepo: String
    projectScreenshot: String
    projectSkills: [Skill]
  }

  type Message {
    _id: ID
    content: String
    sender: User
    createdAt: String
  }

  type Thread {
    _id: ID
    participants: [User]
    messages: [Message]
  }

  type Auth {
    token: ID
  }

  type Query {
    user: User
    users: [User]
    thread(participants: [ID]): Thread
  }

  type Mutation {
    signup(firstName: String!, lastName: String!, email: String!, password: String!, isDev: Boolean!): Auth
    login(email: String!, password: String!): Auth
    addSkills(skillName: String!): User
    removeSkill(skillName: String!): User
    addProject(projectName: String!, projectDescription: String!, projectUrl: String, projectRepo: String!, projectScreenshot: String, projectSkills: [ID]!): User
    removeProject(projectId: ID!): User
    addProjectSkill(projectId: ID!, skillId: ID!): User
    removeProjectSkill(projectId: ID!, skillId: ID!): User
    addBio(bio: String!): User
    updateBio(bio: String!): User
    addProfilePic(profilePic: String!): User
    removeProfilePic: User
    addProfile(firstName: String!, lastName: String!, email: String!, bio: String!, isDev: Boolean!): User
    removeProfile: User
    createThread(participants: [ID]!): Thread
    addMessage(threadId: ID!, content: String!): Thread
  }
`;

module.exports = typeDefs;
