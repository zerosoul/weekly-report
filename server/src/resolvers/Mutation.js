// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const { APP_SECRET, getUserId } = require("../utils");
const upsertUser = async (parent, args, ctx, info) => {
  const { id = '', group = '', ...rest } = args.data;
  if (group) {
    rest.group = {
      connect: {
        id: group
      }
    };
  }
  console.log('UPSERT user data', id, rest);
  let user = {};
  if (id) {
    console.log('update user', id, rest);

    user = await ctx.prisma.updateUser({ data: rest, where: { id } });
  } else {
    console.log('new user', rest);
    user = await ctx.prisma.createUser({ ...rest, createAt: new Date() });
  }
  // const user = await ctx.prisma.upsertUser({
  //   where: {
  //     id
  //   },
  //   update: {
  //     ...rest
  //   },
  //   create: {
  //     ...rest,
  //     createAt: new Date()
  //   }
  // });
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
