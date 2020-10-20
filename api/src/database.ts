import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/api-typescript", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("Database connected"))
  .catch((err) => console.log(err));
