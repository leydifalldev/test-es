import { Request, Response } from "express";
import PlayerService from "./players.service";

export const GetPlayersListCtrl = async (req: Request, res: Response) => {
  try {
    let response = await PlayerService.getList();
    res.status(200).json(response);
  } catch (e) {
    res.status(500).json(e);
  }
}

export const GetPlayerCtrl = async (req: Request, res: Response) => {
  try {
    const { ref } = req.params;
    let serviceResponse = await PlayerService.getPlayer();
    res.status(serviceResponse.httpStatus).json(serviceResponse);
  } catch (e) {
    res.status(500).json(e);
  }
}
