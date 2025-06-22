const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  console.log(rows)
  return rows;
}

async function insertMessage(message) {
  await pool.query("INSERT INTO messages VALUES ($1, $2, $3, $4)", [message.text, message.user, message.added, message.id]);
}

async function deleteAllMessages() {
  await pool.query("DELETE FROM messages");
}

module.exports = {
  getAllMessages,
  insertMessage,
  deleteAllMessages
};
