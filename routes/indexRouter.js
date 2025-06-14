const { Router } = require("express");
const indexRouter = Router() ;

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 0,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 1,
  }
];


indexRouter.get("/", (req, res) => {
  res.render("index", {title: "Mini Messageboard", messages: messages});
});
indexRouter.post("/new", (req, res) => {
  messages.push({ text: req.body.messageText, user: req.body.authorName, added: new Date(), id: (messages[messages.length-1].id+1) });
  console.log(messages);
  res.redirect('/')
})
indexRouter.get("/message/:messageId", (req, res) => {
  const {messageId} = req.params;
  res.render("message", {title: messageId, message: messages[messageId]});
});

module.exports = indexRouter;
