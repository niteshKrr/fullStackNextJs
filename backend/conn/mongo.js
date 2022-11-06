const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Interaction")
  .then(() => {
    console.log(`connected to mongodb`);
  })
  .catch((err) => {
    console.log(err);
  });
