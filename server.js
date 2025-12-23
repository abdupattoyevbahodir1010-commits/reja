console.log("server boshlanishi")
const express=require("express");
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
app.get("/salom", function(req,res) {
    res.end(`<h1 style="background:red">Hello world by Bahodir</h1>`)
});
app.get("/sovga", function(req,res) {
    res.end(`<h1 style="background:orange">sovgalar bolimiga xush kelibsiz</h1>`)
});
const server=http.createServer(app);

let PORT=3000;
server.listen(PORT,function(){
    console.log("server ishga tushdi")
})


