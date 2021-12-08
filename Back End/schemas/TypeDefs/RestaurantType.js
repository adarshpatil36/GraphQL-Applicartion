const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } =
  graphql;

const RestaurantType = new GraphQLObjectType({
  name: "Restaurant",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    tags: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    timings: {
      type: GraphQLString,
    },
    deliveryTime: {
      type: GraphQLString,
    },
    deliveryFee: {
      type: GraphQLString,
    },
    rating: {
      type: GraphQLInt,
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
    restaurantPic: {
      type: GraphQLString,
    },
    isRestaurant: {
      type: GraphQLBoolean,
    },
  }),
});

module.exports = RestaurantType;
