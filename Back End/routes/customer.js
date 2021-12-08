var router = require("express").Router();
var kafka = require("../kafka/client");
const { checkAuth } = require("../../Back End/utils/passport");

router.post("/", function (req, res) {
  console.log("Inside Customer server");
  kafka.make_request("post_customer", req.body, function (err, results) {
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
      res.status(200).send(results);
      res.end();
    }
  });
});
router.post("/login", function (req, res) {
  console.log("Inside Customer server");
  kafka.make_request("post_customerLogin", req.body, function (err, results) {
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
      console.log("Inside router post", results);
      res.status(200).send(results);
      // res.json({
      //   results,
      // });

      res.end();
    }
  });
});

module.exports = router;
