console.log(" web server boshlanish")
const express=require("express");
const db = require("./server") .db()
const  mongodb=require("mongodb")

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
app.post("/create_item",(req,res)=>{
    console.log(req.body);
    
    
    const new_reja=req.body.reja;
    db.collection("plans").insertOne({reja:new_reja},(err,data)=>{
      res.json(data.ops[0])
    })
});
app.post("/delete-item",(req,res)=>{
    console.log("frontenddan backentga ketdi")
    const id=req.body.id;
    console.log(id)
    console.log("backenddan databasega keldi");
    db.collection("plans").deleteOne({_id:new mongodb.ObjectId(id)},
    console.log("databasedan backendga keldi"),
    function(err,data){
        res.json({state:"succed"})
    }
)

})
app.post("/edit-item",(req,res)=>{
    const data=req.body
    console.log(data)
    db.collection("plans").findOneAndUpdate({_id:new mongodb.ObjectId(data.id)},
    { $set: {reja: data.new_input} },
    function(err,data){
        res.json({state:"succed"})

    }
)
});
app.post("/delete-all",(req,res)=>{
    if(req.body.delete_all){
        db.collection("plans").deleteMany(function(){
            res.json({state:"Hamma rejalar o'chdi!"})
        })
    }
    
})

app.get("/",function(req,res){
    db.collection("plans")
    .find()
    .toArray((err,data)=>{
        if(err){
            console.log(err);
            res.end("something went wrong")
        }else{
            console.log("user entered /")
            res.render("reja" ,{items:data})
        }
    })

});

app.get("/author",(req,res)=>{
    res.render("author",{user:user})
})

module.exports=app;



