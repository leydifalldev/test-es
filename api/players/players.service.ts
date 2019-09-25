import * as playerdata from "./players.data.json";
class PlaceService {
  getList() {
    return playerdata.players.sort((a, b)=> {
      if (a.id !== b.id) {
        return a.id - b.id
    }
    if (a.name === b.name) {
      return 0;
    }
    return a.name > b.name ? 1 : -1;
    });
  }

  getPlayer(ref) {
    let player = playerdata.players.find(player => player.id == ref);
    let status = player ? 200 : 404;
    return {
      status: status,
      data: player
    }
  }
}

export default new PlaceService();