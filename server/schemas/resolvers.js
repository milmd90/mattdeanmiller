const { Chord } = require('../models');

const resolvers = {
  Query: {
    chords: async () => {
      return Chord.find();
    },

    chord: async (parent, { id }) => {
      return Chord.findOne({ _id: id });
    },
  },
};

module.exports = resolvers;
