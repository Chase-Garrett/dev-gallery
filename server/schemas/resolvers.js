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
  },
  Mutation: {
    signin: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token };
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
  },
};

module.exports = resolvers;
