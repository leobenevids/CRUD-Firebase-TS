import { Request, Response } from "express";

// DB connection
import firestore from "../db/conn";

// Logger
import Logger from "../config/logger";

// Model
import Movie from "../models/Movie";

// create movie
export const addMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    await firestore.collection("movies").doc().set(data);
    return res.status(201).json({ success: "Filme salvo com sucesso!" });
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    return res
      .status(500)
      .json({ error: "Um erro aconteceu. Por favor, tente novamente." });
  }
};

// get all movies
export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await firestore.collection("movies").get();
    const movieList: object[] = [];

    if (movies.empty) {
      res.status(404).json({ error: "Nenhum filme foi encontrado." });
    }

    movies.forEach((doc: any) => {
      const movie = new Movie(
        doc.id,
        doc.data().title,
        doc.data().rating,
        doc.data().description,
        doc.data().genre,
        doc.data().casting,
        doc.data().release,
        doc.data().director,
        doc.data().poster
      );
      movieList.push(movie);
    });
    res.status(200).json(movieList);
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    res
      .status(500)
      .json({ error: "Um erro aconteceu. Por favor, tente novamente." });
  }
};

// get one movie
export const getMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const movie = await firestore.collection("movies").doc(id).get();

    if (!movie.exists) {
      res.status(404).json({ error: "Nenhum resultado para o respectivo ID." });
    }

    res.status(200).json(movie.data());
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    res
      .status(500)
      .json({ error: "Um erro aconteceu. Por favor, tente novamente." });
  }
};

// update a movie
export const updateMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await firestore.collection("movies").doc(id).update(data);
    res.status(200).json({ success: "Filme editado com sucesso!" });
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    res
      .status(500)
      .json({ error: "Um erro aconteceu. Por favor, tente novamente." });
  }
};

// delete a movie
export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await firestore.collection("movies").doc(id).delete();
    res.status(200).json({ success: "Filme deletado com sucesso." });
  } catch (error: any) {
    Logger.error(`Erro no sistema: ${error.message}`);
    res
      .status(500)
      .json({ error: "Um erro aconteceu. Por favor, tente novamente." });
  }
};
