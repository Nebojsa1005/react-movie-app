import { Movies } from "../types/intefaces/Movies.interface";

export const getMoviesList = async (id: string) => {
  const movies = await fetch(
    `${import.meta.env.VITE_PUBLIC_API}/${id}${import.meta.env.VITE_API_KEY}`
  );

  return await movies.json()
};
