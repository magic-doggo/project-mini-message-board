const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(message) {
  console.log(message);
  console.log(message.messageText, message.authorName);
  await pool.query("INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)", [message.messageText, message.authorName, new Date()]); // message.added, message.id
}

async function deleteAllMessages() {
  await pool.query("DELETE FROM messages");
}

module.exports = {
  getAllMessages,
  insertMessage,
  deleteAllMessages
};
