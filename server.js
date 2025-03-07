import express from "express";
const app = express();

app.use('/',(req,res)=>{
    res.send("Hello world v1");
})
app.listen(4000,()=>{
    console.log("server is running");
})