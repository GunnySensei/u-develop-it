const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
//no need to be explicit to ./index.js -> node.js finds for you
const apiRoutes = require("./routes/apiRoutes");
const db = require("./db/connection");
const inputCheck = require("./utils/inputCheck");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRoutes);

//default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
