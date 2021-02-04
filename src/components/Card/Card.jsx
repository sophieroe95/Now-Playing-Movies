import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const {
  poster_path, original_title, overview, release_date, popularity, vote_average
  } = props.movie;

  const rating = (popularity) => popularity > 0 ? '⭐'.repeat(Math.floor(popularity/500)) : '';

  const formatDate = (input) => {
    if (input === "") return "No date available from database sorry!";
    else {
    let datePart = input.match(/\d+/g),
    year = datePart[0].substring(2),
    month = datePart[1], day = datePart[2];
    return day+'/'+month+'/'+year;}
  }

  return (
    <>
    <div className={styles.card}>
      <img src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt={original_title} />
      <section className={styles.movieDetails}>
        <h2>{original_title}</h2>
        <p>
          <span></span>
        </p>
        <p>{overview}</p>
        <p><b>Release Date: </b>{formatDate(release_date)}</p>
        <p><b>The Movie DB Popularity Rating:</b> {popularity} {rating(popularity)}</p>
        <p><b>Voter Average:</b> {vote_average}</p>
      </section>
    </div>
    </>
  );
};

export default Card;
