import MovieModel, {MovieDocument} from '../models/movies';

import  { IMovie } from '../interfaces/movie.interface';

export const getMovies = async (): Promise<MovieDocument[]> => {
  return MovieModel.find();
};


export const createMovie = async (
  data: IMovie
): Promise<MovieDocument | null> => {
  return await MovieModel.create(data);
  
};

export const removeMovie = async (id: string): Promise<void | null> => {
  return MovieModel.findOneAndRemove({ _id: id });
};

export const updateMovie = async (
  id: string,
  data: IMovie
): Promise<MovieDocument | null> => {
  return MovieModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
    runValidators: true
  });
};

export const getMoviesByGenre = async (
  id: string
): Promise<MovieDocument[]> => {
  return MovieModel.find({ genre: id});
};