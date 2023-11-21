const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      return await User.findById(context.user._id);
    },
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    signup: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.verifyPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token };
    },
    addSkills: async (parent, { savedSkills }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const user = await User.findById(context.user._id);

      if (!user) {
        throw new Error("Could not find user");
      }

      user.savedSkills.push(...savedSkills);
      await user.save();

      return user;
    },
    removeSkill: async (parent, { skillName }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const user = await User.findById(context.user._id);

      if (!user) {
        throw new Error("Could not find user");
      }

      user.savedSkills.pull(skillName);
      await user.save();

      return user;
    },
    addProject: async (
      parent,
      {
        projectName,
        projectDescription,
        projectUrl,
        projectRepo,
        projectScreenshot,
        projectSkills,
      },
      context
    ) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const user = await User.findById(context.user._id);

      if (!user) {
        throw new Error("Could not find user");
      }

      user.projects.push({
        projectName,
        projectDescription,
        projectUrl,
        projectRepo,
        projectScreenshot,
        projectSkills,
      });
      await user.save();

      return user;
    },
    removeProject: async (parent, { projectId }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const user = await User.findById(context.user._id);

      if (!user) {
        throw new Error("Could not find user");
      }

      user.projects.pull(projectId);
      await user.save();

      return user;
    },
    addProjectSkill: async (parent, { projectId, skillId }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const user = await User.findById(context.user._id);

      if (!user) {
        throw new Error("Could not find user");
      }

      const project = user.projects.id(projectId);

      if (!project) {
        throw new Error("Could not find project");
      }

      project.projectSkills.push(skillId);
      await user.save();

      return user;
    },
    removeProjectSkill: async (parent, { projectId, skillId }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const user = await User.findById(context.user._id);

      if (!user) {
        throw new Error("Could not find user");
      }

      const project = user.projects.id(projectId);

      if (!project) {
        throw new Error("Could not find project");
      }

      project.projectSkills.pull(skillId);
      await user.save();

      return user;
    },
    addBio: async (parent, { bio }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const user = await User.findById(context.user._id);

      if (!user) {
        throw new Error("Could not find user");
      }

      user.bio = bio;
      await user.save();

      return user;
    },
    updateBio: async (parent, { bio }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const user = await User.findById(context.user._id);

      if (!user) {
        throw new Error("Could not find user");
      }

      user.bio = bio;
      await user.save();

      return user;
    },
    addProfilePic: async (parent, { profilePic }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const user = await User.findById(context.user._id);

      if (!user) {
        throw new Error("Could not find user");
      }

      user.profilePic = profilePic;
      await user.save();

      return user;
    },
    removeProfilePic: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      const user = await User.findById(context.user._id);

      if (!user) {
        throw new Error("Could not find user");
      }

      user.profilePic = "";
      await user.save();

      return user;
    },
    addProfile: async (
      parent,
      { firstName, lastName, email, bio, isDev },
      context
    ) => {
      const user = await User.create({
        firstName,
        lastName,
        email,
        bio,
        isDev,
      });

      const token = signToken(user);

      return { token };
    },
    removeProfile: async (parent, args, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }

      await User.findByIdAndDelete(context.user._id);

      return "Profile deleted";
    },
  },
};

module.exports = resolvers;
