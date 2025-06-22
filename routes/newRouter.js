const { Router } = require("express");
const newRouter = Router() ;
const messageController = require("../controllers/messageController")

newRouter.get("/", (req, res) => {
    res.render("form", {title: "New Form"});
  });


newRouter.post("/", messageController.createMessagePost);

module.exports = newRouter;
