const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent= "I am home staring Content"
const aboutContent = "I am about starting content";
const contactContent = "I am contact content";



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});







app.listen(3000, function(){
    console.log("App running on PORT 3000");
})