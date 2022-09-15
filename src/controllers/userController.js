import User from "../models/User";

export const getjoin = (req, res) => {
    return res.render("join",{pageTitle:"Join"});
}
export const postjoin = async (req, res) => {
    const {name,email,username,password,location} =req.body;
    await User.create({
        name,
        email,
        username,
        password,
        location
    })
    return res.redirect("/login")
}
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");