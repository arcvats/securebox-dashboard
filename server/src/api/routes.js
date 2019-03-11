/**
 * @file Main API Endpoints
 * @author Archit <archit5793@gmail.com>
 */

import express from "express";
import SocketController from "./controllers/SocketController";

export default (mqtt, io) => {
  const router = express.Router();
  const socketController = SocketController(mqtt, io);
  router.get("/", socketController.home);
  return router;
};
