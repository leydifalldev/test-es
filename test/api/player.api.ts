import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { request, expect } from 'chai';
import 'mocha';
import config from "../../config";
const address = `${config.development.host}:${config.development.port}`
//import PlayerService from "../../api/players/players.controller";

describe('API Player Request', () => {
  describe('GET /players', () => {
    it('should return response on call', async () => {
      const res = await request(address).get('/players');
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
    });
    it('should return response on call', async () => {
      const res = await request(address).get('/players/17');
      expect(res).to.have.status(200);
      expect(res.body.data.id).to.equal(17);
    });

    it('should return response on call', async () => {
      const res = await request(address).get('/players/18');
      expect(res).to.have.status(404);
      expect(res.body.data).to.equal(undefined);
    });
  });
})