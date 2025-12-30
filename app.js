console.log(" web server boshlanish")
const express=require("express");
const res=require("express/lib/response")
const db = require("./server") .db()

const app=express();
const fs=require("fs");

// let user;
// fs.readFile("database/user.json","UTF8",(err,data)=>{
//     if(err){
//         console.log("ERROR:",err)
//     }else{
//         user=JSON.parse(data )
//     }
// })

//MongoDB chaqirish



//kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//2 session code






//3 Views code
app.set("views","views");
app.set("view engine","ejs");

//4 Routing code
app.post("/creeate_item",(req,res)=>{
    console.log(req.body);
    res.json({test: "qabul qilindi"})
});
app.get("/",function(req,res){
    res.render("reja")
});

app.get("/author",(req,res)=>{
    res.render("author",{user:user})
})

module.exports=app;



