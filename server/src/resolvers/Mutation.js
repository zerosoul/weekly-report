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
const upsertGroup = async (parent, args, ctx, info) => {
  console.log('UPSERT group data', args);
  const { id = '', ...rest } = args.data;
  const group = await ctx.prisma.upsertGroup({
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
  return group;
};
const removeGroup = async (parent, args, ctx) => {
  const { id } = args;
  const deletedGroup = await ctx.prisma.deleteGroup({
    id
  });
  return !!deletedGroup;
};
module.exports = { upsertUser, removeUser, upsertGroup, removeGroup };
