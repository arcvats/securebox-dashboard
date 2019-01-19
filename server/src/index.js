/**
 * @file Entry point for API
 * @author Archit <archit5793@gmail.com>
 */

import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000);
