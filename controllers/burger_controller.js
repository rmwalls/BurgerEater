const express = require("express");
const router = express.Router();
const burger = require ("../models/burger.js");


// Create all routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.showAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log("burger_controller, line 12" + hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
      // Send back the ID and name of the new burger
      console.log("new id = " + result.id);
      res.json({ id: result.id });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    burger.devourBurger(id, req.body.devoured,function(result) {
      //console.log(result)
      res.json({ changed: result.changedRows })
     });
  }) ;
  
  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;