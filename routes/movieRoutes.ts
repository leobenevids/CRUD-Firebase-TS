import { Router } from "express";

import {
  addMovie,
  getAllMovies,
  getMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController";

// validations
import { validate } from "../middleware/handleValidation";
import { movieCreateValidation } from "../middleware/movieValidation";

const router = Router();

router.post("/movies", movieCreateValidation(), validate, addMovie);
router.get("/movies/:id", getMovie);
router.get("/movies", getAllMovies);
router.delete("/movies/:id", deleteMovie);
router.put("/movies/:id", movieCreateValidation(), validate, updateMovie);

export default { routes: router };
