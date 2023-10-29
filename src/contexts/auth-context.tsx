import { createContext } from "react";
import { UserData } from "../types/intefaces/UserData.interface";

interface AuthCtx {
    userData: UserData
    updateUserData: (event: any) => void
    addFavoriteMovie: (id: number) => void
    removeFavoriteMovie: (id: number) => void

}

export const AuthContext = createContext<AuthCtx>({
  userData: {
    email: '',
    password: '',
    favoriteMovies: []
  },
  updateUserData: (event: any) => {},
  addFavoriteMovie: (id: number) => {},
  removeFavoriteMovie: (id: number) => {}
});
