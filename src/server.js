import express from "express";

const PORT = 4000;

const app = express();

const home = (req,res,next) => {
  console.log("Path: "+ `${req.url}`)
  next()
}

const date= new Date();

const time = (req, res, next) =>{
  console.log("Time: "+ date.toLocaleDateString('ko-kr'))
  next()
}

const security=(req, res, next)=>{
  const protector=req.protector
  if(protector==="http"){
    console.log("secure")
  }else{
    console.log("insecure")
  }
  return
}


const protector=(req, res)=>{
  console.log("ha")
}

app.get("/", home, time, security, protector);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);