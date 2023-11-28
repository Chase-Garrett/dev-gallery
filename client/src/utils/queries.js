import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      bio
      isDev
      savedSkills {
        _id
        skillName
      }
      savedProjects {
        _id
        projectName
        projectDescription
        projectUrl
        projectRepo
        projectSkills {
          _id
          skillName
        }
      }
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  {
    users {
      _id
      firstName
      lastName
      email
      bio
      isDev
      savedSkills {
        _id
        skillName
      }
    }
  }
`;

export const QUERY_THREAD = gql`
  query thread($participants: [ID]) {
    thread(participants: $participants) {
      _id
      participants {
        _id
        firstName
        lastName
      }
      messages {
        _id
        content
        sender {
          _id
          firstName
          lastName
        }
        createdAt
      }
    }
  }
`;
