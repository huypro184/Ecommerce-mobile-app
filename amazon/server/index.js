const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");


// const PORT = process.env.PORT || 3000;
const PORT = 3000;
const app = express();
const DB =
  "mongodb://localhost:27017/ecommerce";

// middleware
app.use(express.json());
app.use(authRouter);

app.get("/", (req, res) => {
    res.send("hello");
  });

  mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`Connected at port ${PORT}`);
});
