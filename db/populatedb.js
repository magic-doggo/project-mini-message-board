#! /usr/bin/env node
const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  username VARCHAR (255),
  added TIMESTAMPTZ,
  idz int
);

INSERT INTO messages (text, username, added, idz) VALUES
  ('Hi there', 'Armando', '2025-06-21T02:23:01.104Z', 0),
  ('Hello world!', 'Charles', '2025-06-22T06:53:02.304Z', 1);
`;

async function main() {
  const client = new Client({
    connectionString: process.env.EXTERNAL_DB_URL,
    ssl: {
      require: true, //why did this fix "read ECONNRESET"? discord suggestion
    }
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
