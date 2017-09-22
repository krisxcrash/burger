var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.create([
        "burger_name", false
    ], [
        req.body.name, req.body.sleepy
    ], function() {
        res.redirect("/");
    });
});

// Export routes for the server.js to use
module.exports = router;