const { ApolloError, AuthenticationError } = require('apollo-server-express');
const { Chord, User } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    chords: async (parent, { shape, type }) => {
      let params = {};
      if (shape) params.shape = shape;
      if (type) params.type = type;
      return Chord.find(params);
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    createUser: async (parent, args, context) => {
      const user = await User.find({ username: args.username });
      if (user.length > 0) {
        throw new ApolloError('Username taken')
      }

      const newUser = await User.create(args);
      const token = signToken(newUser);

      return { token, user: newUser };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new ApolloError('Not logged in');
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
