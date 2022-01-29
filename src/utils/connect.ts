import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

export default function connect() {
  const dbUri = config.get<string>("dbUri");

  return mongoose
    .connect(dbUri)
    .then(() => {
      logger.info("Connected to the database.");
    })
    .catch((error) => {
      logger.error(`Could not connect to database. ${error}`);
      process.exit(1);
    });
}
