const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent= "I am home staring Content"
const aboutContent = "I am about starting content";
const contactContent = "I am contact content";

const app = express();

app.set("view enginge", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));










app.listen(3000, function(){
    console.log("App running on PORT 3000");
})