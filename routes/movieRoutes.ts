import { Router } from "express";
import {
  addMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController";

const router = Router();

router.post("/movies", addMovie);
router.get("/movies", getAllMovies);
router.get("/movies/:id", getMovie);
router.put("/movies/:id", updateMovie);
router.delete("/movies/:id", deleteMovie);

export default { routes: router };
