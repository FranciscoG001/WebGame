const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('batheoDb.db');

// Crie uma tabela de usuários
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)");
});

module.exports = db;
