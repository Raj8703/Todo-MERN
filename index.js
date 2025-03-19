const express = require("express");
const todoroutes = require("./routes/Todo");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/hi", (req, res) => {
  res.json("welcome to our server");
});

app.use("/api/todos", todoroutes);

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
