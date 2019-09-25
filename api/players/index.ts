import express from "express";
import {
  GetPlayersListCtrl,
  GetPlayerCtrl,
} from "./players.controller";

const playerRouter = express.Router();

playerRouter
  .route("/")
  .get(GetPlayersListCtrl);

  playerRouter.route("/:ref")
  .get(GetPlayerCtrl)

export default playerRouter;