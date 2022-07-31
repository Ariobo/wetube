
export const trending = (req, res) => {
    const videos = [
      {
        title: "one",
        rating: 5,
        Comments: 2,
        createdAt: "2 minutes ago",
        views: 50,
        id: 1,
      },
      {
        title: "two",
        rating: 5,
        Comments: 2,
        createdAt: "2 minutes ago",
        views: 50,
        id: 1,
      },
      {
        title: "there",
        rating: 5,
        Comments: 2,
        createdAt: "2 minutes ago",
        views: 50,
        id: 1,
      },
      
    ];
    return res.render("home", { pageTitle: "Home", videos });
};
export const see=(req,res)=>res.render("watch");
export const edit=(req,res)=> res.send("edit");
export const search=(req,res)=>res.send("Search");
export const upload=(req,res)=>res.send("Upload");
export const deleteVideo=(req,res)=>{
    return res.send("Delete Video")
};