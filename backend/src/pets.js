module.exports = {
  petIndex: async (ctx, next) => {
    ctx.body = 'List of pets';
    console.log('hey');
    return next();
  },

  //
  createPet: async (ctx, next) => {
    ctx.body = 'Create pet';
    return next();
  },

  //
  getPetById: async (ctx, next) => {
    ctx.body = 'Get pet by id';
    return next();
  },

  //
  updatePet: async (ctx, next) => {
    ctx.body = 'Update Pet';
    return next();
  },

  //
  deletePet: async (ctx, next) => {
    ctx.body = 'Delete Pet';
    return next();
  },
};
