// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const { APP_SECRET, getUserId } = require("../utils");
const upsertUser = async (parent, args, ctx, info) => {
  console.log('create user data', args);
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
      createAt: new Date(),
      role: 'LEADER'
    }
  });
  return user;
};
module.exports = { upsertUser };
