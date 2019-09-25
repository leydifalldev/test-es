import * as playerdata from "./players.data.json";
class PlaceService {
  getList() {
    return playerdata;
  }

  getPlayer() {
    return playerdata;
  }
}

export default new PlaceService();