import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const headleListening=()=>
    console.log(`server lcistenting on http//localhost:${PORT}😃`);

app.listen(PORT, headleListening); 