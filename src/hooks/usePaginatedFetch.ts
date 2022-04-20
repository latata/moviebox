import { useInfiniteQuery } from "react-query";

import api from "../services/api";

import {MovieType, TVShowType, MovieOrTVShowType} from "../common/types";

type PaginatedFetch = (page: number) => Promise<MovieType[]>;
type PaginatedTVShowFetch = (page: number) => Promise<TVShowType[]>;

const fetchPaginated: PaginatedFetch = async (page = 1) => {
    const { data } = await api.get(
        `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    return data.results;
};

const fetchTVShows: PaginatedTVShowFetch = async (page = 1) => {
    const { data } = await api.get(
        `/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    return data.results;
};

const usePaginatedFetch = () =>
    useInfiniteQuery(["movies"], async ({pageParam: page = 1}) => {
      const [popularMovies, popularTVShows] = await Promise.all([fetchPaginated(page), fetchTVShows(page)]);

      const movies = popularMovies.map<MovieOrTVShowType>(({id, popularity, poster_path, original_title, genres}) => ({
          id,
          popularity,
          poster_path,
          name: original_title,
          genres,
          type: 'movie'
      }))

      const tvShows = popularTVShows.map<MovieOrTVShowType>(({id, popularity, poster_path, original_name, genres}) => ({
          id,
          popularity,
          poster_path,
          name: original_name,
          genres,
          type: 'tvshow'
      }));

      const mergedData = [...movies, ...tvShows];

      mergedData.sort((item1, item2) => {
        return item2.popularity - item1.popularity;
      });

      return mergedData;
  }, {
    keepPreviousData: true,
    getNextPageParam(lastPage, pages) {
        return pages.length + 1;
    }
  });

export default usePaginatedFetch;
