import { Request, Response } from "express";
import 'firebase/firestore';

import firebase from "../db/conn";
import Movie from "../models/Movie";

const firestore = firebase.firestore();

export const addMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    await firestore.collection("movies").doc().set(data);
  } catch (err: any) {
    return res
      .status(500)
      .json({ error: "Um erro aconteceu. Por favor, tente novamente." });
  }
};

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await firestore.collection("movies");
    const data = await movies.get();
    const movieList: object[] = [];
    if (data.empty) {
      res.status(404).send("No movie record found");
    } else {
      data.forEach((doc: any) => {
        const movie = new Movie(
          doc.id,
          doc.data().title,
          doc.data().rating,
          doc.data().description,
          doc.data().director,
          doc.data().poster
        );
        movieList.push(movie);
      });
      res.send(movieList);
    }
  } catch (error) {
    res.status(400).send(`Something is wrog: ${error}`);
  }
};

export const getMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const movie = await firestore.collection("movies").doc(id);
    const data = await movie.get();
    if (!data.exists) {
      res.status(404).send("Movie with the given ID not found");
    } else {
      res.send(data.data());
    }
  } catch (error) {
    res.status(400).send(`Something is wrog: ${error}`);
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const movie = await firestore.collection("movie").doc(id);
    await movie.update(data);
    res.send("Movie record updated successfully");
  } catch (error) {
    res.status(400).send(`Something is wrong: ${error}`);
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await firestore.collection("movies").doc(id).delete();
    res.send("Movie deleted successfully");
  } catch (error) {
    res.status(400).send(`Something is wrog: ${error}`);
  }
};
