import {useCallback, useEffect} from "react";

import usePaginatedFetch from "../../hooks/usePaginatedFetch";

import { MovieBoxLogo } from "../../assets";

import Card from "../../components/shimmer/Card";
import MovieCard  from "../../components/MovieCard";

import * as S from "./styles";
import {MovieCardData} from "../../common/types";

export default function Home() {
  const fakeArr = Array.from(Array(20).keys());

  const { data: movies, isLoading, fetchNextPage, isFetchingNextPage } = usePaginatedFetch();

  const lazyLoad = useCallback(() => {
    if(!isFetchingNextPage && window.scrollY > document.body.scrollHeight - window.innerHeight - 100) {
        fetchNextPage();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', lazyLoad)

    return () => {
      window.removeEventListener('scroll', lazyLoad)
    }
  }, []);

  return (
    <>
      <S.Header>
        <nav>
          <MovieBoxLogo />
          <S.Link to="/favorites">Favorites</S.Link>
        </nav>
      </S.Header>

      <S.PageTitle>Movies</S.PageTitle>

      <S.Main>
        <S.MovieList>
          {isLoading
            ? fakeArr.map((key) => {
                return (
                  <li key={key}>
                    <Card />
                  </li>
                );
              })
            : movies?.pages.map(page => {
                return page.map(({ id, poster_path, name, type }: MovieCardData) => {
                    return (
                        <li key={id}>
                            <MovieCard
                                id={id}
                                name={name}
                                poster_path={poster_path}
                                type={type}
                            />
                        </li>
                    );
                });
              })}
        </S.MovieList>
      </S.Main>
    </>
  );
}
