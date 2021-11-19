const factory = require("../factory_functions/factoryfunction");
module.exports = function GetRoutes(pool){
    const useFactory = factory(pool);
    let home = async (req,res)=>{
        res.render('index');
    }
    let myaccount = async (req,res)=>{
        res.render("myaccount")
    }
    let login = async (req,res)=>{
        res.render("login");
    };
    let subscribe = async (req,res)=>{
        var id = req.params.id;
        console.log(id)
        res.render("subscribe")
    }
  
    return{
        home,
        myaccount,
        login,
        subscribe
    }
}