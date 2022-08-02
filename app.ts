import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import config from "./config/default";

// routes
import movieRoutes from "./routes/movieRoutes";

const port = config.port;

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());

app.use("/api", movieRoutes.routes);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
