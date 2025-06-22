const { Router } = require("express");
const messageRouter = Router() ;
const messageController = require("../controllers/messageController")


messageRouter.get("/", (req, res) => {
    res.send("Nothing here, Input a valid message id");
  });

messageRouter.get("/:messageId", messageController.renderMessageGet );

module.exports = messageRouter;
