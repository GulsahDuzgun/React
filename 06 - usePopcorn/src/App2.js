import { useState, useEffect } from "react";
const API_KEY = "6a2a72a6";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}

function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <Button handleClick={setIsOpen} isOpen={isOpen} />
      {isOpen && children}
    </div>
  );
}

function MovieList({ movies, onSetSelectedMovieID }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSetSelectedMovieID={onSetSelectedMovieID}
        />
      ))}
    </ul>
  );
}

function Movie({ movie, onSetSelectedMovieID }) {
  return (
    <li key={movie.imdbID} onClick={() => onSetSelectedMovieID(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function Button({ handleClick, isOpen }) {
  return (
    <button className="btn-toggle" onClick={() => handleClick((open) => !open)}>
      {isOpen ? "–" : "+"}
    </button>
  );
}

function MovieSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}

function Loader() {
  return <p className="loader">LOADING...</p>;
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function ShowErrorMess({ message }) {
  return <p className="error">⛔{message}</p>;
}

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoad, setIsLoad] = useState(false);
  const [errObj, setErrObj] = useState("");
  const [query, setQuery] = useState("");
  const [selectedMovieID, setSelectedMovieID] = useState(null);

  function handleSetSelectedMovieID(id) {
    setSelectedMovieID((oldID) => (oldID === id ? null : id));
  }

  function handleCloseMovieBtn() {
    setSelectedMovieID(null);
  }

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoad(true);
          setErrObj("");

          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`
          );
          if (!res.ok)
            throw new Error(
              "Something went wrong. Please check your internet connection."
            );

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not Found");

          setMovies(data.Search);
        } catch (err) {
          console.log(err);
          setErrObj(err.message);
        } finally {
          setIsLoad(false);
        }
      }

      if (query.trim().length < 3) {
        setErrObj("");
        setMovies([]);
        return;
      }

      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        {/* <Box element={<MovieList movies={movies} />} />
        <Box
          element={
            <>
              <MovieSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          }
        /> */}

        <Box>
          {errObj && <ShowErrorMess message={errObj} />}
          {isLoad && <Loader />}
          {!errObj & !isLoad && (
            <MovieList
              movies={movies}
              onSetSelectedMovieID={handleSetSelectedMovieID}
            />
          )}
          {/* {isLoad ? <Loader /> : <MovieList movies={movies} />} */}
        </Box>
        <Box>
          {selectedMovieID ? (
            <SelectedMovie
              selectedMovieID={selectedMovieID}
              onCloseMovie={handleCloseMovieBtn}
            />
          ) : (
            <>
              <MovieSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function SelectedMovie({ selectedMovieID, onCloseMovie }) {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedMovieID}
    </div>
  );
}
