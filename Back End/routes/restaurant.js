const router = require("express").Router();
const restaurant = require("../controllers/restaurant");

router.post("/", restaurant.create);
router.post("/updateData", restaurant.update);
router.get("/getAllData", restaurant.findAll);

module.exports = router;
