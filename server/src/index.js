/**
 * @file Entry point for API
 * @author Archit <archit5793@gmail.com>
 */

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./api/routes";
import config from "./config";

mongoose.connect(
  config.database.local,
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Connected to MongoDB");
    }
  },
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", router());

app.listen(process.env.port || config.port, () => {
  console.log(`Listening at ${process.env.port || config.port}`);
});
