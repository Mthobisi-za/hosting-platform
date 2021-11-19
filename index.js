const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const {Pool} = require("pg");
const { engine } = require('express-handlebars');
const body = require("body-parser");
const session = require("express-session");
app.use(session({
    resave: true,
    saveUninitialized : "kat",
    secret : "kat"
}));


///config modules
app.use(express.static("public"));
app.use(body.json());
app.use(body.urlencoded({extended: false}));
app.set("view engine", "handlebars");

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");


var connectionString = process.env.DATABASE_URL;
var pool;
if(connectionString){
    pool = new Pool({connectionString, ssl: {rejectUnauthorized: false}})
}else{
        pool = new Pool({
        port: 5432,
        host: "localhost",
        password: "mthobisi",
        database: "users",
        ssl: false
    })
}


const useGetRoutes = require("./routes/getroutes")(pool);

app.get("/", useGetRoutes.home)
app.get("/myacc", useGetRoutes.myaccount)
app.get("/login", useGetRoutes.login)
app.get("/plan/:id", useGetRoutes.subscribe)

app.listen(PORT, ()=>{
    console.log("App started on " + PORT);
});