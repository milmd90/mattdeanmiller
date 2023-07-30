const { Chord } = require('../models');

const resolvers = {
  Query: {
    chords: async (parent, { shape, type }) => {
      let params = {};
      if (shape) params.shape = shape;
      if (type) params.type = type;
      return Chord.find(params);
    },
  },
};

module.exports = resolvers;
