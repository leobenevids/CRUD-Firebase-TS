import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import config from "./config/default";

// routes
import movieRoutes from "./routes/movieRoutes";

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());

// logger
import Logger from "./config/logger";

// Middlewares
import morganMiddleware from "./middleware/morganMiddleware";

app.use(morganMiddleware);
app.use("/api", movieRoutes.routes);

app.listen(config.port, () => {
  Logger.info(`App is running on http://localhost:${config.port}`);
});
