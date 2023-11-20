import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!, $isDev: Boolean!) {
    login(email: $email, password: $password, isDev: $isDev) {
      token
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation signin(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $isDev: Boolean!
  ) {
    signup(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      isDev: $isDev
    ) {
      token
    }
  }
`;

export const ADD_BIO_MUTATION = gql`
  mutation addBio($bio: String!) {
    addBio(bio: $bio) {
      _id
      firstName
      lastName
      email
      bio
      profilePic
      isDev
    }
  }
`;

export const UPDATE_BIO_MUTATION = gql`
  mutation updateBio($bio: String!) {
    updateBio(bio: $bio) {
      _id
      firstName
      lastName
      email
      bio
      profilePic
      isDev
    }
  }
`;

export const ADD_PROFILE_PIC_MUTATION = gql`
  mutation addProfilePic($profilePic: String!) {
    addProfilePic(profilePic: $profilePic) {
      _id
      firstName
      lastName
      email
      bio
      profilePic
      isDev
    }
  }
`;

export const REMOVE_PROFILE_PIC_MUTATION = gql`
  mutation removeProfilePic {
    removeProfilePic {
      _id
      firstName
      lastName
      email
      bio
      profilePic
      isDev
    }
  }
`;

export const ADD_SKILL_MUTATION = gql`
  mutation addSkills($skillName: String!) {
    addSkills(skillName: $skillName) {
      _id
      firstName
      lastName
      email
      isDev
      skills {
        _id
        skillName
      }
    }
  }
`;

export const REMOVE_SKILL_MUTATION = gql`
  mutation removeSkill($skillName: String!) {
    removeSkill(skillName: $skillName) {
      _id
      firstName
      lastName
      email
      isDev
      skills {
        _id
        skillName
      }
    }
  }
`;

export const ADD_PROFILE_MUTATION = gql`
  mutation addProfile(
    $firstName: String!
    $lastName: String!
    $email: String!
    $bio: String!
    $profilePic: String!
    $isDev: Boolean!
  ) {
    addProfile(
      firstName: $firstName
      lastName: $lastName
      email: $email
      bio: $bio
      isDev: $isDev
    ) {
      _id
      firstName
      lastName
      email
      bio
      isDev
    }
  }
`;

export const REMOVE_PROFILE_MUTATION = gql`
  mutation removeProfile($email: String!) {
    removeProfile(email: $email) {
      _id
      firstName
      lastName
      email
      bio
      profilePic
      isDev
    }
  }
`;

export const ADD_PROJECT_MUTATION = gql`
  mutation addProject(
    $title: String!
    $description: String!
    $link: String!
    $isDev: Boolean!
  ) {
    addProject(
      title: $title
      description: $description
      link: $link
      isDev: $isDev
    ) {
      _id
      title
      description
      link
      isDev
    }
  }
`;

export const REMOVE_PROJECT_MUTATION = gql`
  mutation removeProject($id: ID!) {
    removeProject(id: $id) {
      _id
      title
      description
      link
      isDev
    }
  }
`;
