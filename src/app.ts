import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import mongo from "./mongoConfig/mongo";
import path from "path";
import taskRoute from "./routes/route";

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use("/", taskRoute);

mongo();

app.listen(process.env.PORT || 2000, () => {
  console.log("server up!");
});