const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } =
  graphql;

const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    user: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    contact: {
      type: GraphQLString,
    },
    country: {
      type: GraphQLString,
    },
    profilePic: {
      type: GraphQLString,
    },
    isRestaurant: {
      type: GraphQLBoolean,
    },
  }),
});

module.exports = CustomerType;
