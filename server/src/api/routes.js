/**
 * @file Main API Endpoints
 * @author Archit <archit5793@gmail.com>
 */

import express from "express";
import SocketController from "./controllers/SocketController";

export default (mqtt, io) => {
  const router = express.Router();
  const socketController = SocketController(io);
  router.post("/stacktrace", socketController.stackTrace);
  router.post("/timer", socketController.timer);
  router.post("/audit", socketController.audit);
  return router;
};
