const graphql = require("graphql");
const restaurant = require("../controllers/restaurant");
const customer = require("../controllers/customer");
const address = require("../controllers/address");
const dishes = require("../controllers/dishes");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} = graphql;

const RestaurantType = require("./TypeDefs/RestaurantType");
const CustomerType = require("./TypeDefs/CustomerType");
const AddressType = require("./TypeDefs/AddressType");
const DishType = require("./TypeDefs/DishType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllRestaurants: {
      type: new GraphQLList(RestaurantType),
      args: {
        _id: {
          type: GraphQLString,
        },
      },
      async resolve(parent, args) {
        const res = await restaurant.findAll();
        return res;
      },
    },
    loginCustomer: {
      type: new GraphQLList(CustomerType),
      args: {
        _id: {
          type: GraphQLString,
        },
      },
      async resolve(parent, args) {
        const res = await customer.login();
        return res;
      },
    },
    getAllAddress: {
      type: new GraphQLList(AddressType),
      args: {
        _id: {
          type: GraphQLString,
        },
      },
      async resolve(parent, args) {
        const res = await address.findAll();
        return res;
      },
    },
    getAllDishes: {
      type: new GraphQLList(DishType),
      args: {
        _id: {
          type: GraphQLString,
        },
      },
      async resolve(parent, args) {
        const res = await dishes.findAll(args);
        return res;
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createRestaurant: {
      type: RestaurantType,
      args: {
        _id: {
          type: GraphQLString,
        },
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
      },
      async resolve(parent, args) {
        const res = await restaurant.create(args);
        return res;
      },
    },
    updateRestaurant: {
      type: RestaurantType,
      args: {
        _id: {
          type: GraphQLString,
        },
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
      },
      async resolve(parent, args) {
        const res = await restaurant.update(args);
        return res;
      },
    },
    createCustomer: {
      type: CustomerType,
      args: {
        _id: {
          type: GraphQLString,
        },
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
      },
      async resolve(parent, args) {
        const res = await customer.create(args);
        return res;
      },
    },
    createDish: {
      type: DishType,
      args: {
        _id: {
          type: GraphQLString,
        },
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
      },
      async resolve(parent, args) {
        const res = await dishes.create(args);
        return res;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
