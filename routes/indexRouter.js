const { Router } = require("express");
const indexRouter = Router() ;
const messageController = require("../controllers/messageController")

indexRouter.get("/", messageController.getMessages);
module.exports = indexRouter;
