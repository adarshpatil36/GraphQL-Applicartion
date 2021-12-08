const express = require("express");
const app = express();
const cors = require("cors");
const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} = graphql;

const { graphqlHTTP } = require("express-graphql");

const restaurant = require("./controllers/restaurant");

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
  },
});

var corsOptions = {
  origin: "http://localhost:3000",
};

// app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
const uri =
  "mongodb+srv://root:root@cluster0.qpepu.mongodb.net/Uber_Eats?retryWrites=true&w=majority";

// const client = new MongoClient(uri);
mongoose.connect(uri, () => console.log("Connected to DB"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to uber eats application." });
});

// const address = require("./services/address");
// app.use("/address", address);

// const customer = require("./routes/customer");
// app.use("/customer", customer);

// const dishes = require("./routes/dishes");
// app.use("/dishes", dishes);

// const orders = require("./routes/orders");
// app.use("/orders", orders);

// const restaurant = require("./routes/restaurant");
// app.use("/restaurant", restaurant);
const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
