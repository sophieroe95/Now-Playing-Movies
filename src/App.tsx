import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import Imovie from "./data/IMovie";


interface movielistresponse {
  page: string, 
  results: Imovie[],
  total_pages: number,
  total_results: number, 
  movie: Imovie
}

const App = () => {
  const [movieList, setMovieList] = useState<Imovie[]>([])
  
  const setMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5e473a31810331c30e2b2ea3492bf871&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(response => response.json())
      .then((response: movielistresponse) => {
        console.log(response)
        const movieList = response.results;
        setMovieList(movieList)})
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    setMovies();
  }, [])


  const getPopularMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5e473a31810331c30e2b2ea3492bf871&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1`)
      .then(response => response.json())
      .then((response: movielistresponse) => {
        console.log(response)
        const popularMovies = response.results;
        setMovieList(popularMovies);
      })
      .catch(error => console.error('Error:', error));
  };
  

  return (
    <div className={styles.App}>
      <section><NavBar className={styles.navbar} getPopularMovies={getPopularMovies} /></section>
      <Dashboard className={styles.dashboard} movieList={movieList}/>
    </div>
  );
}

export default App;
