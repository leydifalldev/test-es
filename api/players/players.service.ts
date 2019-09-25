import * as playerdata from "./players.data.json";
import http from "http";
import axios from "axios";

class PlaceService {
  async getList() {
    const playerdata = await this.getDataFromEndPoint();
    return this.sortData(playerdata);
  }

  sortData(data) {
    return data.data.players.sort((a, b)=> {
      if (a.id !== b.id) {
        return a.id - b.id
    }
    if (a.name === b.name) {
      return 0;
    }
    return a.name > b.name ? 1 : -1;
    });
  }

  async getPlayer(ref) {
    const playerdata = await this.getDataFromEndPoint();
    let player = playerdata.data.players.find(player => player.id == ref);
    let status = player ? 200 : 404;
    return {
      status: status,
      data: player
    }
  }

  async getDataFromEndPoint(){
    try{
      return await axios.get("https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json");
    } catch(e){
      console.log(e)
    }
  }
}

export default new PlaceService();