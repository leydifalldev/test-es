import express, { Application } from "express";
import bodyParser from "body-parser";
import apiRouter from "./players";
import config from "../config";

const app: Application = express();

app.set("port", config.development.port);
app.use(express.static('public'));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS, PATCH");
  next();
});
app.use(bodyParser.json({ limit: '50mb' }));
app.use("/assets", express.static('public'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use("/players", apiRouter);

export default app;
