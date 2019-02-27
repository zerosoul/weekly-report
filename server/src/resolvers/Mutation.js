// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const { APP_SECRET, getUserId } = require("../utils");
const upsertUser = async (parent, args, ctx, info) => {
  console.log('UPSERT user data', args);
  const { id = '', ...rest } = args.data;
  const user = await ctx.prisma.upsertUser({
    where: {
      id
    },
    update: {
      ...rest
    },
    create: {
      ...rest,
      createAt: new Date()
    }
  });
  return user;
};
const removeUser = async (parent, args, ctx) => {
  const { id } = args;
  const deletedUser = await ctx.prisma.deleteUser({
    id
  });
  return !!deletedUser;
};
module.exports = { upsertUser, removeUser };
