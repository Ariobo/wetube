import express from "express";
import morgan from "morgan";

const PORT=4000

const app = express();
const logger=morgan("dev");

const home=(req,res)=>{
    return res.send("hello");
}

const login=(req,res)=>{
    return res.end("login");
};

app.use(logger);
app.get("/",home);
app.get("/login",login);

const headleListening=()=>
    console.log(`server lcistenting on port http//localhost:${PORT}😃`);

app.listen(PORT, headleListening);