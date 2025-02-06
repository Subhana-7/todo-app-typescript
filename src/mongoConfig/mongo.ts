import mongoose from "mongoose";

export default () => {
  mongoose
    .connect(process.env.MONGODB_URL as string)
    .then(() => {
      console.log("mongoDB connected");
    })
    .catch((err) => {
      console.log("error while connecting to the database", err);
    });
};