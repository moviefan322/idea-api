const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 3001;

const app = express();

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the Idea App!" });
});

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
