import User from "../models/User";
import bcrypt from "bcrypt";

export const getjoin = (req, res) => {
    return res.render("join",{pageTitle:"Join"});
}
export const postjoin = async (req, res) => {
    const {name,email,username,password,password2,location} =req.body;
    const pageTitle="join";
    if(password !==password2){
        return res.render("join",{
            pageTitle,
            errorMassage: "password! no"
        });
    }
    const exists = await User.exists({$or:[{username},{email}]}); 
    if(exists){
        return res.status(400).render("join",{
            pageTitle,
            errorMassage: "nooo  usernam/email oooooooow!"
        });
    }
    try{
        await User.create({
            name,
            email,
            username,
            password,
            location
        })
        return res.redirect("/login")
    } catch (error) {
        return res.status(400).render("join", {
          pageTitle: "Upload Video",
          errorMessage: error._message,
        });
    }
}
export const getlogin = (req, res) => {
    res.render("login",{pageTitle:"Login"});
}
export const postlogin = async (req, res) => {
    const {username,password} =req.body;
    const pageTitle = "Login"
    const user =await User.findOne({username})
    if(!user){
        return res.status(400).render("login",{pageTitle,errorMassage: "야 틀리잖아"})
    }
    const ok = await bcrypt.compare(password,user.password);
    if(!ok){
        return res.status(400).render("login",{pageTitle,errorMassage: "야 틀리잖아"})
    }
    return res.redirect("/");
}
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");