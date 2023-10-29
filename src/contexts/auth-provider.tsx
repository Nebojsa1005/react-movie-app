import { useState } from "react";
import { UserData } from "../types/intefaces/UserData.interface";
import { AuthContext } from "./auth-context";

export default function AuthContextProvider({ children }: any) {
  const [userData, setUserData] = useState<UserData>({
    email: "",
    password: "",
    favoriteMovies: [],
  });

  const updateUserData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const key = event.target.name;
    const value = event.target.value;

    setUserData((prev: UserData) => {
      prev[key] = value;
      return {
        ...prev,
      };
    });
  };

  const addFavoriteMovie = (id: number) => {
    setUserData((prev) => {
      prev.favoriteMovies.push(id);
      return {
        ...prev,
      };
    });
  };

  const removeFavoriteMovie = (id: number) => {
    setUserData((prev) => {
      const movieIndex = prev.favoriteMovies.indexOf(id);
      prev.favoriteMovies.splice(movieIndex, 1);
      return { ...prev };
    });
  };

  const authContextValue = {
    userData,
    updateUserData,
    addFavoriteMovie,
    removeFavoriteMovie,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
