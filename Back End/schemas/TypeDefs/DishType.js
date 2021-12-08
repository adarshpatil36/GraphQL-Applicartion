const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } =
  graphql;

const DishType = new GraphQLObjectType({
  name: "Dish",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLInt,
    },
    rating: {
      type: GraphQLInt,
    },
    imageURL: {
      type: GraphQLString,
    },
    restaurantId: {
      type: GraphQLString,
    },
  }),
});

module.exports = DishType;
