import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import { library } from "./data/fa-library";

const App = () => {
  const [movieList, setMovieList] = useState([])

  const setMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5e473a31810331c30e2b2ea3492bf871&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        const movieList = response.results;
        setMovieList(movieList);
      });
  };

  useEffect(() => {
    setMovies();
  }, [])


  const getPopularMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5e473a31810331c30e2b2ea3492bf871&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1`)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        const popularMovies = response.results;
        setMovieList(popularMovies);
      });
  };

  return (
    <div className={styles.App}>
      <section><NavBar className={styles.navbar} getPopularMovies={getPopularMovies} /></section>
      <Dashboard className={styles.dashboard} movieList={movieList} />
    </div>
  );
}

export default App;
