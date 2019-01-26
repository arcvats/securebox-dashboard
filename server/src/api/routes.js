/**
 * @file Main API Endpoints
 * @author Archit <archit5793@gmail.com>
 */

import express from "express";
import ConfigController from "./controllers/ConfigController";

export default () => {
  const router = express.Router();
  router
    .route("/config")
    .post(ConfigController.loadConfig)
    .put(ConfigController.updateConfig);
  return router;
};
