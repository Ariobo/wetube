import express from "express";
import { getjoin,postjoin, getlogin,postlogin} from "../controllers/userController";
import { home ,search} from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getjoin).post(postjoin);
rootRouter.route("/login").get(getlogin).post(postlogin);
rootRouter.get("/search",search);

export default rootRouter;
