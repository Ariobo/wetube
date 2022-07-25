import express from "express";
import res from "express/lib/response";

const PORT=4000

const app = express();

const logger=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
}

const handleHome=(req,res)=>{
    return res.end("i'm hah");
};

app.get("/",logger,handleHome);


const headleListening=()=>
    console.log(`server listenting on port http//localhost:${PORT}😃`);

app.listen(PORT, headleListening);