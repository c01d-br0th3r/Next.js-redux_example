import axios from "axios";

export const api = {
  getMovies: () =>
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e6e0dd53c79220875187320b4265f3d6&language=ko-KR&page=1"
      )
      .then((res) => res.data),
  getSearch: (term: string) =>
    axios
      .get(
        `https://api.themoviedb.org/3/search/company?api_key=e6e0dd53c79220875187320b4265f3d6&query=${term}&page=1`
      )
      .then((res) => res.data),
};
