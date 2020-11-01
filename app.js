const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();
    var dayOftheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const day = dayOftheWeek[currentDay];

    res.render("list", {kindOfDay: day});
});

app.listen(3000, function(){
    console.log("Server is listening on port 3000.");
});