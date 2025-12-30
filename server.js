const http=require("http")

const mongodb=require('mongodb')

let db;
const connectionString="mongodb+srv://bahodir177:H0ShrOXgwkNNyEzC@cluster0.cszxotm.mongodb.net/Reja?appName=Cluster0";

mongodb.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopolgy:true,
},(err,client)=>{
    if(err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succed")
       module.exports=client;

        const app=require('./app')
        const server=http.createServer(app);
        let PORT=3000;
server.listen(PORT,function(){
    console.log(`server ishga tushdi:${PORT},http://localhost:${PORT}`)
})

    }

})

