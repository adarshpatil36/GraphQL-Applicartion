var router = require("express").Router();
var kafka = require("../kafka/client");
// const { checkAuth } = require("../../Back End/utils/passport");

router.post("/", function (req, res) {
  console.log("Inside Dish server");
  kafka.make_request("post_dish", req.body, function (err, results) {
    console.log("in result");
    console.log(results);
    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: "System Error, Try Again.",
      });
    } else {
      console.log("Inside else");
      res.json({
        message: "Dish saved successfully",
      });

      res.end();
    }
  });
});

router.get("/getDishes/:id", (req, res) => {
  kafka.make_request("get_dishes", req.params.id, function (err, results) {
    console.log("Inside Get dishes");
    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: "System Error, Try Again.",
      });
    } else {
      console.log("Inside router post", results);
      res.status(200).send(results);
    }
  });
});

module.exports = router;
