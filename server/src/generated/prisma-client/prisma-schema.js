module.exports = {
        typeDefs: /* GraphQL */ `type AggregateGroup {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateReport {
  count: Int!
}

type AggregateReportItem {
  count: Int!
}

type AggregateSendRecord {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Group {
  id: ID!
  parent: Group
  createAt: DateTime!
  name: String!
  intro: String
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  parent: GroupCreateOneInput
  createAt: DateTime!
  name: String!
  intro: String
  users: UserCreateManyWithoutGroupInput
}

input GroupCreateManyWithoutUsersInput {
  create: [GroupCreateWithoutUsersInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateOneInput {
  create: GroupCreateInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutUsersInput {
  parent: GroupCreateOneInput
  createAt: DateTime!
  name: String!
  intro: String
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  createAt_ASC
  createAt_DESC
  name_ASC
  name_DESC
  intro_ASC
  intro_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupPreviousValues {
  id: ID!
  createAt: DateTime!
  name: String!
  intro: String
}

input GroupScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createAt: DateTime
  createAt_not: DateTime
  createAt_in: [DateTime!]
  createAt_not_in: [DateTime!]
  createAt_lt: DateTime
  createAt_lte: DateTime
  createAt_gt: DateTime
  createAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  intro: String
  intro_not: String
  intro_in: [String!]
  intro_not_in: [String!]
  intro_lt: String
  intro_lte: String
  intro_gt: String
  intro_gte: String
  intro_contains: String
  intro_not_contains: String
  intro_starts_with: String
  intro_not_starts_with: String
  intro_ends_with: String
  intro_not_ends_with: String
  AND: [GroupScalarWhereInput!]
  OR: [GroupScalarWhereInput!]
  NOT: [GroupScalarWhereInput!]
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateDataInput {
  parent: GroupUpdateOneInput
  createAt: DateTime
  name: String
  intro: String
  users: UserUpdateManyWithoutGroupInput
}

input GroupUpdateInput {
  parent: GroupUpdateOneInput
  createAt: DateTime
  name: String
  intro: String
  users: UserUpdateManyWithoutGroupInput
}

input GroupUpdateManyDataInput {
  createAt: DateTime
  name: String
  intro: String
}

input GroupUpdateManyMutationInput {
  createAt: DateTime
  name: String
  intro: String
}

input GroupUpdateManyWithoutUsersInput {
  create: [GroupCreateWithoutUsersInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [GroupScalarWhereInput!]
  updateMany: [GroupUpdateManyWithWhereNestedInput!]
}

input GroupUpdateManyWithWhereNestedInput {
  where: GroupScalarWhereInput!
  data: GroupUpdateManyDataInput!
}

input GroupUpdateOneInput {
  create: GroupCreateInput
  update: GroupUpdateDataInput
  upsert: GroupUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateWithoutUsersDataInput {
  parent: GroupUpdateOneInput
  createAt: DateTime
  name: String
  intro: String
}

input GroupUpdateWithWhereUniqueWithoutUsersInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutUsersDataInput!
}

input GroupUpsertNestedInput {
  update: GroupUpdateDataInput!
  create: GroupCreateInput!
}

input GroupUpsertWithWhereUniqueWithoutUsersInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutUsersDataInput!
  create: GroupCreateWithoutUsersInput!
}

input GroupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  parent: GroupWhereInput
  createAt: DateTime
  createAt_not: DateTime
  createAt_in: [DateTime!]
  createAt_not_in: [DateTime!]
  createAt_lt: DateTime
  createAt_lte: DateTime
  createAt_gt: DateTime
  createAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  intro: String
  intro_not: String
  intro_in: [String!]
  intro_not_in: [String!]
  intro_lt: String
  intro_lte: String
  intro_gt: String
  intro_gte: String
  intro_contains: String
  intro_not_contains: String
  intro_starts_with: String
  intro_not_starts_with: String
  intro_ends_with: String
  intro_not_ends_with: String
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
}

enum ItemType {
  DONE
  TODO
}

scalar Long

type Mutation {
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createReport(data: ReportCreateInput!): Report!
  updateReport(data: ReportUpdateInput!, where: ReportWhereUniqueInput!): Report
  updateManyReports(data: ReportUpdateManyMutationInput!, where: ReportWhereInput): BatchPayload!
  upsertReport(where: ReportWhereUniqueInput!, create: ReportCreateInput!, update: ReportUpdateInput!): Report!
  deleteReport(where: ReportWhereUniqueInput!): Report
  deleteManyReports(where: ReportWhereInput): BatchPayload!
  createReportItem(data: ReportItemCreateInput!): ReportItem!
  updateReportItem(data: ReportItemUpdateInput!, where: ReportItemWhereUniqueInput!): ReportItem
  updateManyReportItems(data: ReportItemUpdateManyMutationInput!, where: ReportItemWhereInput): BatchPayload!
  upsertReportItem(where: ReportItemWhereUniqueInput!, create: ReportItemCreateInput!, update: ReportItemUpdateInput!): ReportItem!
  deleteReportItem(where: ReportItemWhereUniqueInput!): ReportItem
  deleteManyReportItems(where: ReportItemWhereInput): BatchPayload!
  createSendRecord(data: SendRecordCreateInput!): SendRecord!
  updateSendRecord(data: SendRecordUpdateInput!, where: SendRecordWhereUniqueInput!): SendRecord
  updateManySendRecords(data: SendRecordUpdateManyMutationInput!, where: SendRecordWhereInput): BatchPayload!
  upsertSendRecord(where: SendRecordWhereUniqueInput!, create: SendRecordCreateInput!, update: SendRecordUpdateInput!): SendRecord!
  deleteSendRecord(where: SendRecordWhereUniqueInput!): SendRecord
  deleteManySendRecords(where: SendRecordWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  published: Boolean!
  title: String!
  content: String!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  published: Boolean
  title: String!
  content: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  published_ASC
  published_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  published: Boolean!
  title: String!
  content: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateManyMutationInput {
  published: Boolean
  title: String
  content: String
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  report(where: ReportWhereUniqueInput!): Report
  reports(where: ReportWhereInput, orderBy: ReportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Report]!
  reportsConnection(where: ReportWhereInput, orderBy: ReportOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReportConnection!
  reportItem(where: ReportItemWhereUniqueInput!): ReportItem
  reportItems(where: ReportItemWhereInput, orderBy: ReportItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ReportItem]!
  reportItemsConnection(where: ReportItemWhereInput, orderBy: ReportItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReportItemConnection!
  sendRecord(where: SendRecordWhereUniqueInput!): SendRecord
  sendRecords(where: SendRecordWhereInput, orderBy: SendRecordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SendRecord]!
  sendRecordsConnection(where: SendRecordWhereInput, orderBy: SendRecordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SendRecordConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Report {
  id: ID!
  title: String!
  status: ReportStatus!
  startTime: DateTime!
  endTime: DateTime!
  reportBy: User!
  items(where: ReportItemWhereInput, orderBy: ReportItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ReportItem!]
}

type ReportConnection {
  pageInfo: PageInfo!
  edges: [ReportEdge]!
  aggregate: AggregateReport!
}

input ReportCreateInput {
  title: String!
  status: ReportStatus!
  startTime: DateTime!
  endTime: DateTime!
  reportBy: UserCreateOneInput!
  items: ReportItemCreateManyInput
}

input ReportCreateOneInput {
  create: ReportCreateInput
  connect: ReportWhereUniqueInput
}

type ReportEdge {
  node: Report!
  cursor: String!
}

type ReportItem {
  id: ID!
  type: ItemType!
  content: String!
  progress: String!
  remark: String
}

type ReportItemConnection {
  pageInfo: PageInfo!
  edges: [ReportItemEdge]!
  aggregate: AggregateReportItem!
}

input ReportItemCreateInput {
  type: ItemType!
  content: String!
  progress: String!
  remark: String
}

input ReportItemCreateManyInput {
  create: [ReportItemCreateInput!]
  connect: [ReportItemWhereUniqueInput!]
}

type ReportItemEdge {
  node: ReportItem!
  cursor: String!
}

enum ReportItemOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  content_ASC
  content_DESC
  progress_ASC
  progress_DESC
  remark_ASC
  remark_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReportItemPreviousValues {
  id: ID!
  type: ItemType!
  content: String!
  progress: String!
  remark: String
}

input ReportItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: ItemType
  type_not: ItemType
  type_in: [ItemType!]
  type_not_in: [ItemType!]
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  progress: String
  progress_not: String
  progress_in: [String!]
  progress_not_in: [String!]
  progress_lt: String
  progress_lte: String
  progress_gt: String
  progress_gte: String
  progress_contains: String
  progress_not_contains: String
  progress_starts_with: String
  progress_not_starts_with: String
  progress_ends_with: String
  progress_not_ends_with: String
  remark: String
  remark_not: String
  remark_in: [String!]
  remark_not_in: [String!]
  remark_lt: String
  remark_lte: String
  remark_gt: String
  remark_gte: String
  remark_contains: String
  remark_not_contains: String
  remark_starts_with: String
  remark_not_starts_with: String
  remark_ends_with: String
  remark_not_ends_with: String
  AND: [ReportItemScalarWhereInput!]
  OR: [ReportItemScalarWhereInput!]
  NOT: [ReportItemScalarWhereInput!]
}

type ReportItemSubscriptionPayload {
  mutation: MutationType!
  node: ReportItem
  updatedFields: [String!]
  previousValues: ReportItemPreviousValues
}

input ReportItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReportItemWhereInput
  AND: [ReportItemSubscriptionWhereInput!]
  OR: [ReportItemSubscriptionWhereInput!]
  NOT: [ReportItemSubscriptionWhereInput!]
}

input ReportItemUpdateDataInput {
  type: ItemType
  content: String
  progress: String
  remark: String
}

input ReportItemUpdateInput {
  type: ItemType
  content: String
  progress: String
  remark: String
}

input ReportItemUpdateManyDataInput {
  type: ItemType
  content: String
  progress: String
  remark: String
}

input ReportItemUpdateManyInput {
  create: [ReportItemCreateInput!]
  update: [ReportItemUpdateWithWhereUniqueNestedInput!]
  upsert: [ReportItemUpsertWithWhereUniqueNestedInput!]
  delete: [ReportItemWhereUniqueInput!]
  connect: [ReportItemWhereUniqueInput!]
  disconnect: [ReportItemWhereUniqueInput!]
  deleteMany: [ReportItemScalarWhereInput!]
  updateMany: [ReportItemUpdateManyWithWhereNestedInput!]
}

input ReportItemUpdateManyMutationInput {
  type: ItemType
  content: String
  progress: String
  remark: String
}

input ReportItemUpdateManyWithWhereNestedInput {
  where: ReportItemScalarWhereInput!
  data: ReportItemUpdateManyDataInput!
}

input ReportItemUpdateWithWhereUniqueNestedInput {
  where: ReportItemWhereUniqueInput!
  data: ReportItemUpdateDataInput!
}

input ReportItemUpsertWithWhereUniqueNestedInput {
  where: ReportItemWhereUniqueInput!
  update: ReportItemUpdateDataInput!
  create: ReportItemCreateInput!
}

input ReportItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: ItemType
  type_not: ItemType
  type_in: [ItemType!]
  type_not_in: [ItemType!]
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  progress: String
  progress_not: String
  progress_in: [String!]
  progress_not_in: [String!]
  progress_lt: String
  progress_lte: String
  progress_gt: String
  progress_gte: String
  progress_contains: String
  progress_not_contains: String
  progress_starts_with: String
  progress_not_starts_with: String
  progress_ends_with: String
  progress_not_ends_with: String
  remark: String
  remark_not: String
  remark_in: [String!]
  remark_not_in: [String!]
  remark_lt: String
  remark_lte: String
  remark_gt: String
  remark_gte: String
  remark_contains: String
  remark_not_contains: String
  remark_starts_with: String
  remark_not_starts_with: String
  remark_ends_with: String
  remark_not_ends_with: String
  AND: [ReportItemWhereInput!]
  OR: [ReportItemWhereInput!]
  NOT: [ReportItemWhereInput!]
}

input ReportItemWhereUniqueInput {
  id: ID
}

enum ReportOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  status_ASC
  status_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ReportPreviousValues {
  id: ID!
  title: String!
  status: ReportStatus!
  startTime: DateTime!
  endTime: DateTime!
}

enum ReportStatus {
  UNSEND
  SEND
  SEND_FAIL
}

type ReportSubscriptionPayload {
  mutation: MutationType!
  node: Report
  updatedFields: [String!]
  previousValues: ReportPreviousValues
}

input ReportSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReportWhereInput
  AND: [ReportSubscriptionWhereInput!]
  OR: [ReportSubscriptionWhereInput!]
  NOT: [ReportSubscriptionWhereInput!]
}

input ReportUpdateDataInput {
  title: String
  status: ReportStatus
  startTime: DateTime
  endTime: DateTime
  reportBy: UserUpdateOneRequiredInput
  items: ReportItemUpdateManyInput
}

input ReportUpdateInput {
  title: String
  status: ReportStatus
  startTime: DateTime
  endTime: DateTime
  reportBy: UserUpdateOneRequiredInput
  items: ReportItemUpdateManyInput
}

input ReportUpdateManyMutationInput {
  title: String
  status: ReportStatus
  startTime: DateTime
  endTime: DateTime
}

input ReportUpdateOneRequiredInput {
  create: ReportCreateInput
  update: ReportUpdateDataInput
  upsert: ReportUpsertNestedInput
  connect: ReportWhereUniqueInput
}

input ReportUpsertNestedInput {
  update: ReportUpdateDataInput!
  create: ReportCreateInput!
}

input ReportWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  status: ReportStatus
  status_not: ReportStatus
  status_in: [ReportStatus!]
  status_not_in: [ReportStatus!]
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  endTime: DateTime
  endTime_not: DateTime
  endTime_in: [DateTime!]
  endTime_not_in: [DateTime!]
  endTime_lt: DateTime
  endTime_lte: DateTime
  endTime_gt: DateTime
  endTime_gte: DateTime
  reportBy: UserWhereInput
  items_every: ReportItemWhereInput
  items_some: ReportItemWhereInput
  items_none: ReportItemWhereInput
  AND: [ReportWhereInput!]
  OR: [ReportWhereInput!]
  NOT: [ReportWhereInput!]
}

input ReportWhereUniqueInput {
  id: ID
}

type SendRecord {
  id: ID!
  sendReport: Report!
  sendBy: User!
  createAt: DateTime!
  success: Boolean!
}

type SendRecordConnection {
  pageInfo: PageInfo!
  edges: [SendRecordEdge]!
  aggregate: AggregateSendRecord!
}

input SendRecordCreateInput {
  sendReport: ReportCreateOneInput!
  sendBy: UserCreateOneInput!
  createAt: DateTime!
  success: Boolean
}

type SendRecordEdge {
  node: SendRecord!
  cursor: String!
}

enum SendRecordOrderByInput {
  id_ASC
  id_DESC
  createAt_ASC
  createAt_DESC
  success_ASC
  success_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SendRecordPreviousValues {
  id: ID!
  createAt: DateTime!
  success: Boolean!
}

type SendRecordSubscriptionPayload {
  mutation: MutationType!
  node: SendRecord
  updatedFields: [String!]
  previousValues: SendRecordPreviousValues
}

input SendRecordSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SendRecordWhereInput
  AND: [SendRecordSubscriptionWhereInput!]
  OR: [SendRecordSubscriptionWhereInput!]
  NOT: [SendRecordSubscriptionWhereInput!]
}

input SendRecordUpdateInput {
  sendReport: ReportUpdateOneRequiredInput
  sendBy: UserUpdateOneRequiredInput
  createAt: DateTime
  success: Boolean
}

input SendRecordUpdateManyMutationInput {
  createAt: DateTime
  success: Boolean
}

input SendRecordWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  sendReport: ReportWhereInput
  sendBy: UserWhereInput
  createAt: DateTime
  createAt_not: DateTime
  createAt_in: [DateTime!]
  createAt_not_in: [DateTime!]
  createAt_lt: DateTime
  createAt_lte: DateTime
  createAt_gt: DateTime
  createAt_gte: DateTime
  success: Boolean
  success_not: Boolean
  AND: [SendRecordWhereInput!]
  OR: [SendRecordWhereInput!]
  NOT: [SendRecordWhereInput!]
}

input SendRecordWhereUniqueInput {
  id: ID
}

type Subscription {
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  report(where: ReportSubscriptionWhereInput): ReportSubscriptionPayload
  reportItem(where: ReportItemSubscriptionWhereInput): ReportItemSubscriptionPayload
  sendRecord(where: SendRecordSubscriptionWhereInput): SendRecordSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createAt: DateTime!
  name: String!
  nickname: String
  avatar: String
  email: String!
  intro: String
  birthday: DateTime
  sex: Int!
  role: UserRole!
  group(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  createAt: DateTime!
  name: String!
  nickname: String
  avatar: String
  email: String!
  intro: String
  birthday: DateTime
  sex: Int
  role: UserRole!
  group: GroupCreateManyWithoutUsersInput
}

input UserCreateManyWithoutGroupInput {
  create: [UserCreateWithoutGroupInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutGroupInput {
  createAt: DateTime!
  name: String!
  nickname: String
  avatar: String
  email: String!
  intro: String
  birthday: DateTime
  sex: Int
  role: UserRole!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createAt_ASC
  createAt_DESC
  name_ASC
  name_DESC
  nickname_ASC
  nickname_DESC
  avatar_ASC
  avatar_DESC
  email_ASC
  email_DESC
  intro_ASC
  intro_DESC
  birthday_ASC
  birthday_DESC
  sex_ASC
  sex_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  createAt: DateTime!
  name: String!
  nickname: String
  avatar: String
  email: String!
  intro: String
  birthday: DateTime
  sex: Int!
  role: UserRole!
}

enum UserRole {
  ADMIN
  LEADER
  MANAGER
  STAFF
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createAt: DateTime
  createAt_not: DateTime
  createAt_in: [DateTime!]
  createAt_not_in: [DateTime!]
  createAt_lt: DateTime
  createAt_lte: DateTime
  createAt_gt: DateTime
  createAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  nickname: String
  nickname_not: String
  nickname_in: [String!]
  nickname_not_in: [String!]
  nickname_lt: String
  nickname_lte: String
  nickname_gt: String
  nickname_gte: String
  nickname_contains: String
  nickname_not_contains: String
  nickname_starts_with: String
  nickname_not_starts_with: String
  nickname_ends_with: String
  nickname_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  intro: String
  intro_not: String
  intro_in: [String!]
  intro_not_in: [String!]
  intro_lt: String
  intro_lte: String
  intro_gt: String
  intro_gte: String
  intro_contains: String
  intro_not_contains: String
  intro_starts_with: String
  intro_not_starts_with: String
  intro_ends_with: String
  intro_not_ends_with: String
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  sex: Int
  sex_not: Int
  sex_in: [Int!]
  sex_not_in: [Int!]
  sex_lt: Int
  sex_lte: Int
  sex_gt: Int
  sex_gte: Int
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  createAt: DateTime
  name: String
  nickname: String
  avatar: String
  email: String
  intro: String
  birthday: DateTime
  sex: Int
  role: UserRole
  group: GroupUpdateManyWithoutUsersInput
}

input UserUpdateInput {
  createAt: DateTime
  name: String
  nickname: String
  avatar: String
  email: String
  intro: String
  birthday: DateTime
  sex: Int
  role: UserRole
  group: GroupUpdateManyWithoutUsersInput
}

input UserUpdateManyDataInput {
  createAt: DateTime
  name: String
  nickname: String
  avatar: String
  email: String
  intro: String
  birthday: DateTime
  sex: Int
  role: UserRole
}

input UserUpdateManyMutationInput {
  createAt: DateTime
  name: String
  nickname: String
  avatar: String
  email: String
  intro: String
  birthday: DateTime
  sex: Int
  role: UserRole
}

input UserUpdateManyWithoutGroupInput {
  create: [UserCreateWithoutGroupInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutGroupInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutGroupDataInput {
  createAt: DateTime
  name: String
  nickname: String
  avatar: String
  email: String
  intro: String
  birthday: DateTime
  sex: Int
  role: UserRole
}

input UserUpdateWithWhereUniqueWithoutGroupInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutGroupDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutGroupInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutGroupDataInput!
  create: UserCreateWithoutGroupInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createAt: DateTime
  createAt_not: DateTime
  createAt_in: [DateTime!]
  createAt_not_in: [DateTime!]
  createAt_lt: DateTime
  createAt_lte: DateTime
  createAt_gt: DateTime
  createAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  nickname: String
  nickname_not: String
  nickname_in: [String!]
  nickname_not_in: [String!]
  nickname_lt: String
  nickname_lte: String
  nickname_gt: String
  nickname_gte: String
  nickname_contains: String
  nickname_not_contains: String
  nickname_starts_with: String
  nickname_not_starts_with: String
  nickname_ends_with: String
  nickname_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  intro: String
  intro_not: String
  intro_in: [String!]
  intro_not_in: [String!]
  intro_lt: String
  intro_lte: String
  intro_gt: String
  intro_gte: String
  intro_contains: String
  intro_not_contains: String
  intro_starts_with: String
  intro_not_starts_with: String
  intro_ends_with: String
  intro_not_ends_with: String
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  sex: Int
  sex_not: Int
  sex_in: [Int!]
  sex_not_in: [Int!]
  sex_lt: Int
  sex_lte: Int
  sex_gt: Int
  sex_gte: Int
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  group_every: GroupWhereInput
  group_some: GroupWhereInput
  group_none: GroupWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    