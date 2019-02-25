const users = async (parent, args, ctx, info) => {
  const { filter, skip, first, orderBy } = args;
  console.log('users query args', args);
  // console.log('users query info', info);

  const where = filter
    ? {
        OR: [{ name_contains: filter }, { nickname_contains: filter }]
      }
    : {};
  const users = await ctx.prisma.users({ where, skip, first, orderBy });
  console.log('users', users);

  const total = await ctx.prisma
    .usersConnection({ where })
    .aggregate()
    .count();
  return { users, total };
};
module.exports = {
  users
};
