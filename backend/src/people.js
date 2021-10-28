module.exports = {
  peopleIndex: async (ctx, next) => {
    ctx.body = 'List of people';
    return next();
  },

  //
  createPerson: async (ctx, next) => {
    ctx.body = 'Created person json data';
    return next();
  },

  //
  getPersonById: async (ctx, next) => {
    ctx.body = 'Person json data';
    return next();
  },

  //
  updatePerson: async (ctx, next) => {
    ctx.body = 'Update person data';
    return next();
  },

  //
  deletePerson: async (ctx, next) => {
    ctx.body = 'Delete person data';
    return next();
  },
};
