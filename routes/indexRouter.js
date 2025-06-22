const { Router } = require("express");
const indexRouter = Router() ;
const messageController = require("../controllers/messageController")

indexRouter.get("/", messageController.getMessages);

// indexRouter.get("/message/:messageId", (req, res) => {
//   const {messageId} = req.params;
//   res.render("message", {title: messageId, message: messages[messageId]});
// });
//find correct index in db
module.exports = indexRouter;
