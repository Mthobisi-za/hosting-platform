const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const {Pool} = require("pg");
const { engine } = require('express-handlebars');
const body = require("body-parser");


///config modules
app.use(express.static("public"));
app.use(body.json());
app.use(body.urlencoded({extended: false}));
app.set("view engine", "handlebars");

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");


app.get("/", (req,res)=>{
    res.render('index');
});
app.get("/myacc", (req,res)=>{
    res.render("myaccount")
})

app.listen(PORT, ()=>{
    console.log("App started on " + PORT);
});