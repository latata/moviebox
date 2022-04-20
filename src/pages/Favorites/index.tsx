import { useHistory } from "react-router-dom";

import { useAppSelector } from "../../hooks/useStore";

import { MovieBoxLogo } from "../../assets";
import { FiArrowLeft } from "react-icons/fi";

import MovieCard from "../../components/MovieCard";

import * as S from "./styles";

export default function Favorites() {
  const { movies } = useAppSelector((state) => state.favorites);

  const history = useHistory();

  return (
    <>
      <S.Header>
        <FiArrowLeft size={24} onClick={() => history.goBack()} />
        <MovieBoxLogo />
      </S.Header>

      <S.PageTitle>Favorites</S.PageTitle>

      <S.Main>
        <S.MovieList>
          {movies.map(({ id, name, poster_path, type }) => {
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
          })}
        </S.MovieList>
      </S.Main>
    </>
  );
}
