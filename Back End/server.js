const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

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

const address = require("./services/address");
app.use("/address", address);

const restaurant = require("./routes/restaurant");
app.use("/restaurant", restaurant);

const customer = require("./routes/customer");
app.use("/customer", customer);

const dishes = require("./routes/dishes");
app.use("/dishes", dishes);

const orders = require("./routes/orders");
app.use("/orders", orders);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
