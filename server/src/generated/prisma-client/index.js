"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Report",
    embedded: false
  },
  {
    name: "ReportItem",
    embedded: false
  },
  {
    name: "SendRecord",
    embedded: false
  },
  {
    name: "ReportStatus",
    embedded: false
  },
  {
    name: "ItemType",
    embedded: false
  },
  {
    name: "UserRole",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
