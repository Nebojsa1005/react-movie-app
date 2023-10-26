
export const getMoviesList = async (id: string) => {
  const movies = await fetch(
    `${import.meta.env.VITE_PUBLIC_API}/${id}${import.meta.env.VITE_API_KEY}`
  );

  return await movies.json()
};

export const getMovieById = async (id: string) => {
  const movie = await fetch(
    `${import.meta.env.VITE_PUBLIC_API}/${id}${import.meta.env.VITE_API_KEY}`
  )
  return await movie.json()
}