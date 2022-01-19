import { MovieBoxLogo } from "../../assets";

import Card from "../../components/shimmer/Card";
import MovieCard from "../../components/MovieCard";

import * as S from "./styles";

export default function Home() {

  const fakeArr = Array.from(Array(20).keys());

  const isLoading = false;

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
          {fakeArr.map((key) => {
            return (
              <li key={key}>
                {isLoading ? <Card /> : <MovieCard />}
              </li>
            );
          })}
        </S.MovieList>

      </S.Main>
    </>
  );
}
