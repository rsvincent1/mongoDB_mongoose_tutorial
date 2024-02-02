const express = require("express");
const app = express();
const port = 3000;
// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB =
  "mongodb+srv://rvincent87:@cluster0.iiml9ct.mongodb.net/local_library?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// import mongoose from "mongoose";

// mongoose.connect(
//   "mongodb+srv://rvincent87:cRhon4065@cluster0.iiml9ct.mongodb.net/"
// );
