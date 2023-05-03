const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 3001;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the Idea App!" });
});

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
