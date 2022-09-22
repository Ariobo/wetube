import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./router/rootRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";
import { localeMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine","pug");
app.set("views",process.cwd()+"/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: "hello",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl:"mongodb://127.0.0.1:27017/wetube"}),
}))

app.use((req,res,next) => {
    req.sessionStore.all((error,session)=>{
        next();
    });
});

app.use(localeMiddleware);
app.use("/",rootRouter);
app.use("/videos",videoRouter);
app.use("/users",userRouter);

export default app