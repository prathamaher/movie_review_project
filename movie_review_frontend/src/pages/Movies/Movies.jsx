import MovieItem from "./MovieItem";

function Movies() {
  const movies = [
    { title: "Forrest Gump", releaseDate: "12-02-2000" },
    { title: "Forrest Gump", releaseDate: "12-02-2000" },
  ];
  const renderedMovieList = movies.map((movie) => {
    return <MovieItem movie={movie} />;
  });
  return (
    <div className="list-group list-group-horizontal">{renderedMovieList}</div>
  );
}

export default Movies;
