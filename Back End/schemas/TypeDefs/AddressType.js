const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } =
  graphql;

const AddressType = new GraphQLObjectType({
  name: "Address",
  fields: () => ({
    type: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    userId: {
      type: GraphQLString,
    },
  }),
});

module.exports = AddressType;
