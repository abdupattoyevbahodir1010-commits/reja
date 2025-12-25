console.log(" web server boshlanish")
const express=require("express");
const res=require("express/lib/response")
const http=require("http")
const app=express();
const fs=require("fs");

let user;
fs.readFile("database/user.json","UTF8",(err,data)=>{
    if(err){
        console.log("ERROR:",err)
    }else{
        user=JSON.parse(data )
    }
})


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//2

//3
app.set("views","views");
app.set("view engine","ejs");

//4
app.post("/creeate_item",(req,res)=>{
    console.log(req.body);
    res.json({test: "qabul qilindi"})
});
app.get("/",function(req,res){
    res.render("harid")
});

app.get("/author",(req,res)=>{
    res.render("author",{user:user})
})

const server=http.createServer(app);

let PORT=3000;
server.listen(PORT,function(){
    console.log(`server ishga tushdi,${PORT}`)
})


