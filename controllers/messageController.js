const db = require("../db/queries");

async function getMessages(req, res) {
    messages = await db.getAllMessages();
    res.render("index", {
        title: "index",
        messages: messages,
    })
}

async function createMessagePost(req, res) {
  const { message } = req.body;
  await db.insertMessage(message);
  res.redirect("/");
}

async function deleteAllUsers(req, res) {
  await db.deleteAllUsers();
  res.redirect("/");
}

module.exports = {
  getMessages,
  deleteAllUsers,
  createMessagePost
};