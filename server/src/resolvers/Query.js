const { PAGE_SIZE } = require('../config');
const userList = async (parent, args, ctx, info) => {
  // 指定默认值
  const { filter, skip = 0, first = PAGE_SIZE, orderBy = 'createdAt_ASC' } = args;
  console.log('users query args', args);
  // console.log('users query info', info);

  const where = filter
    ? {
        AND: filter
      }
    : {};
  const users = await ctx.prisma.users({ where, skip, first, orderBy });
  console.log('users', users);

  const total = await ctx.prisma
    .usersConnection({ where })
    .aggregate()
    .count();
  return { users, total, pageSize: first, current: skip / first + 1 };
};
const groupList = async (parent, args, ctx, info) => {
  // 指定默认值
  const { filter, skip = 0, first = PAGE_SIZE, orderBy = 'createdAt_ASC' } = args;
  console.log('groups query args', args);
  // console.log('groups query info', info);

  const where = filter
    ? {
        AND: filter
      }
    : {};
  const groups = await ctx.prisma.groups({ where, skip, first, orderBy });
  console.log('groups', groups);

  const total = await ctx.prisma
    .groupsConnection({ where })
    .aggregate()
    .count();
  return { groups, total, pageSize: first, current: skip / first + 1 };
};
module.exports = {
  userList,
  groupList
};
