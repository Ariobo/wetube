export const localeMiddleware=(req,res,next)=>{
    res.locals.loggedIn=Boolean(req.session.loggedIn);
    res.locals.siteName ="Wetube";
    res.locals.loggedInUser=req.session.user;
    next();
}