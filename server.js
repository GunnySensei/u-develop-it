const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

const mysql = require("mysql2");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Blue86Jeep12!",
    database: "election",
  },
  console.log("Connected to the election database")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

//default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
