// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const { APP_SECRET, getUserId } = require("../utils");
const createUser = async (parent, args, ctx, info) => {
  console.log('create user data', args);
  const user = await ctx.prisma.createUser(args);
  return {
    user
  };
};
module.exports = { createUser };
