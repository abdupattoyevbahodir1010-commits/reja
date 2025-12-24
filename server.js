console.log(" web server boshlanish")
const express=require("express");
const res=require("express/lib/response")
const http=require("http")
const app=express();


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
})

const server=http.createServer(app);

let PORT=3000;
server.listen(PORT,function(){
    console.log(`server ishga tushdi,${PORT}`)
})


