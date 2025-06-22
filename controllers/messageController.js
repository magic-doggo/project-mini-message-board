const db = require("../db/queries");
const pool = require("../db/pool");

async function getMessages(req, res) {
    messages = await db.getAllMessages();
    console.log(messages);
    res.render("index", {
        title: "index",
        messages: messages,
    })
}

async function createMessagePost(req, res) {
  const message = req.body;
  await db.insertMessage(message);
  res.redirect("/");
}

async function deleteAllUsers(req, res) {
  await db.deleteAllUsers();
  res.redirect("/");
}

async function renderMessageGet(req, res) {
  const messageId = req.params.messageId;
  const result = await pool.query("SELECT * FROM messages where id = $1", [messageId]);
  const message = result.rows[0];
  console.log(message);
  res.render("message", {title: messageId, message: message})
}

module.exports = {
  getMessages,
  deleteAllUsers,
  createMessagePost,
  renderMessageGet
};